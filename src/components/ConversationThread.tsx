import React, { useState } from 'react';
import { Reply, ReplyAll, Forward, MoreHorizontal, Star, Archive, ChevronDown, ChevronUp, Sparkles, RotateCcw, Tag } from 'lucide-react';
import { Email, CustomLabel } from '../types/email';
import EmailLabelActions from './EmailLabelActions';

interface AiReplyState {
  isGenerating: boolean;
  showAiReply: boolean;
  generatedReply: string;
  tone: 'professional' | 'friendly' | 'concise';
}

interface ConversationThreadProps {
  email: Email | null;
  onClose: () => void;
  aiReplyState: AiReplyState;
  onGenerateAiReply: (email: Email, tone?: string) => void;
  onAiReplyStateChange: (state: AiReplyState) => void;
  customLabels: CustomLabel[];
  onEmailLabelsChange: (emailIds: string[], labelIds: string[]) => void;
  onCreateLabel: (label: Omit<CustomLabel, 'id' | 'createdAt'>) => void;
}

const ConversationThread: React.FC<ConversationThreadProps> = ({ 
  email, 
  onClose, 
  aiReplyState, 
  onGenerateAiReply, 
  onAiReplyStateChange,
  customLabels,
  onEmailLabelsChange,
  onCreateLabel
}) => {
  const [replyText, setReplyText] = useState('');
  const [showReply, setShowReply] = useState(false);
  const [expandedMessages, setExpandedMessages] = useState<Set<string>>(new Set());

  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl text-gray-400">📧</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Select an email</h3>
          <p className="text-gray-500">Choose an email from the list to view the conversation</p>
        </div>
      </div>
    );
  }

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const handleSendReply = () => {
    if (replyText.trim()) {
      // Handle reply logic here
      setReplyText('');
      setShowReply(false);
      onAiReplyStateChange({ ...aiReplyState, showAiReply: false, generatedReply: '' });
    }
  };

  const handleAiReplyGenerate = () => {
    if (email) {
      onGenerateAiReply(email, aiReplyState.tone);
    }
  };

  const handleToneChange = (tone: 'professional' | 'friendly' | 'concise') => {
    onAiReplyStateChange({ ...aiReplyState, tone });
  };

  const handleUseAiReply = () => {
    setReplyText(aiReplyState.generatedReply);
    setShowReply(true);
    onAiReplyStateChange({ ...aiReplyState, showAiReply: false });
  };

  const handleRegenerateAi = () => {
    if (email) {
      onGenerateAiReply(email, aiReplyState.tone);
    }
  };

  const toggleMessageExpansion = (messageId: string) => {
    setExpandedMessages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
      }
      return newSet;
    });
  };

  const getEmailCustomLabels = (email: Email) => {
    if (!email.customLabels) return [];
    return email.customLabels
      .map(labelId => customLabels.find(label => label.id === labelId))
      .filter(Boolean) as CustomLabel[];
  };

  // Sort messages chronologically (oldest first)
  const sortedMessages = [...email.messages].sort((a, b) => 
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const emailLabels = getEmailCustomLabels(email);

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-semibold text-gray-900 truncate">{email.subject}</h2>
            <div className="flex items-center space-x-4 mt-2">
              <p className="text-sm text-gray-500">
                {email.messages.length} message{email.messages.length !== 1 ? 's' : ''}
              </p>
              
              {/* Email Labels */}
              {emailLabels.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {emailLabels.slice(0, 3).map((label) => (
                    <span
                      key={label.id}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
                      style={{
                        backgroundColor: `${label.color}15`,
                        color: label.color,
                        border: `1px solid ${label.color}30`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-1"
                        style={{ backgroundColor: label.color }}
                      />
                      {label.name}
                    </span>
                  ))}
                  {emailLabels.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                      +{emailLabels.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            <EmailLabelActions
              emailIds={[email.id]}
              currentLabels={email.customLabels || []}
              availableLabels={customLabels}
              onLabelsChange={onEmailLabelsChange}
              onCreateLabel={onCreateLabel}
            />
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Archive className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Star className={`w-5 h-5 ${email.isStarred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {sortedMessages.map((message, index) => {
            const isExpanded = expandedMessages.has(message.id) || index === sortedMessages.length - 1;
            const isLastMessage = index === sortedMessages.length - 1;
            
            return (
              <div key={message.id} className="border-b border-gray-100 last:border-b-0">
                <div className="p-6">
                  {/* Message Header */}
                  <div 
                    className={`cursor-pointer ${!isLastMessage ? 'hover:bg-gray-50 -m-2 p-2 rounded-lg' : ''}`}
                    onClick={() => !isLastMessage && toggleMessageExpansion(message.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-semibold text-sm">
                            {message.sender.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center space-x-2">
                            <p className="font-semibold text-gray-900">{message.sender}</p>
                            {!isLastMessage && (
                              <button className="text-gray-400 hover:text-gray-600">
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{formatTimestamp(message.timestamp)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Message Metadata - Always visible for expanded messages */}
                    {isExpanded && (
                      <div className="mb-4 bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">From:</span>
                            <p className="text-gray-600 mt-1">{`${message.sender} <${message.senderEmail}>`}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Subject:</span>
                            <p className="text-gray-600 mt-1">{message.subject}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">To:</span>
                            <p className="text-gray-600 mt-1">{message.to.join(', ')}</p>
                          </div>
                          
                          {message.cc && message.cc.length > 0 && (
                            <div>
                              <span className="font-medium text-gray-700">CC:</span>
                              <p className="text-gray-600 mt-1">{message.cc.join(', ')}</p>
                            </div>
                          )}
                          
                          {message.bcc && message.bcc.length > 0 && (
                            <div>
                              <span className="font-medium text-gray-700">BCC:</span>
                              <p className="text-gray-600 mt-1">{message.bcc.join(', ')}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Message Content */}
                  {isExpanded && (
                    <>
                      <div className="prose max-w-none mb-6">
                        <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </div>
                      </div>
                      
                      {/* Action Buttons - Only show for the last message */}
                      {isLastMessage && (
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => setShowReply(!showReply)}
                              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                            >
                              <Reply className="w-4 h-4" />
                              <span>Reply</span>
                            </button>
                            <button 
                              onClick={handleAiReplyGenerate}
                              disabled={aiReplyState.isGenerating}
                              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors"
                            >
                              <Sparkles className="w-4 h-4" />
                              <span>{aiReplyState.isGenerating ? 'Generating...' : 'Reply with AI'}</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
                              <ReplyAll className="w-4 h-4" />
                              <span>Reply All</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
                              <Forward className="w-4 h-4" />
                              <span>Forward</span>
                            </button>
                          </div>

                          {/* AI Reply Preview */}
                          {aiReplyState.showAiReply && (
                            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                  <Sparkles className="w-4 h-4 text-purple-600" />
                                  <span className="font-semibold text-gray-900">AI Generated Reply</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <select
                                    value={aiReplyState.tone}
                                    onChange={(e) => handleToneChange(e.target.value as any)}
                                    className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                  >
                                    <option value="professional">Professional</option>
                                    <option value="friendly">Friendly</option>
                                    <option value="concise">Concise</option>
                                  </select>
                                  <button
                                    onClick={handleRegenerateAi}
                                    className="text-purple-600 hover:text-purple-700 p-1"
                                    title="Regenerate"
                                  >
                                    <RotateCcw className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                              <div className="bg-white border border-gray-200 rounded p-3 mb-3">
                                <pre className="whitespace-pre-wrap text-gray-800 text-sm font-sans">
                                  {aiReplyState.generatedReply}
                                </pre>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={handleUseAiReply}
                                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                                >
                                  <span>Use This Reply</span>
                                </button>
                                <button
                                  onClick={() => onAiReplyStateChange({ ...aiReplyState, showAiReply: false })}
                                  className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                                >
                                  Dismiss
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                  
                  {/* Collapsed Message Preview */}
                  {!isExpanded && !isLastMessage && (
                    <div className="text-sm text-gray-500 truncate">
                      {message.content.substring(0, 100)}...
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reply Box */}
      {showReply && (
        <div className="border-t border-gray-200 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reply</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">To:</span> {email.senderEmail}</p>
                <p><span className="font-medium">Subject:</span> Re: {email.subject}</p>
              </div>
            </div>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write your reply..."
              className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {replyText === aiReplyState.generatedReply && aiReplyState.generatedReply && (
              <div className="mt-2 text-sm text-purple-600 flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Using AI-generated reply</span>
              </div>
            )}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setShowReply(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSendReply}
                  disabled={!replyText.trim()}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                >
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationThread;