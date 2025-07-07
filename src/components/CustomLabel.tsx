import { useEffect, useRef, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { mockCustomLabels } from "../data/mockLabels";

interface Label {
  id: string;
  name: string;
  color: string;
}

const LabelList = ({ emailLabels }: { emailLabels: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(emailLabels.length);

  // Map label IDs to full label objects
  const fullLabels: Label[] = mockCustomLabels.filter((label) =>
    emailLabels.includes(label.id)
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLSpanElement[];

    let totalWidth = 0;
    const maxWidth = container.offsetWidth;
    let count = 0;

    for (const child of children) {
      totalWidth += child.offsetWidth + 4; // 4px spacing
      if (totalWidth <= maxWidth) {
        count++;
      } else {
        break;
      }
    }

    setVisibleCount(count > 0 ? count : 1);
  }, [fullLabels]);

  const showOverflow = visibleCount < fullLabels.length;
  const visibleLabels = showOverflow
    ? fullLabels.slice(0, visibleCount - 1)
    : fullLabels;
  const hiddenLabels = showOverflow ? fullLabels.slice(visibleCount - 1) : [];

  return (
    <div
      className="flex items-center gap-1 mt-2 overflow-hidden"
      ref={containerRef}
      style={{ whiteSpace: "nowrap" }}
    >
      {visibleLabels.map((label) => (
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

      {showOverflow && hiddenLabels.length > 0 && (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 cursor-pointer">
                +{hiddenLabels.length} more
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                className="bg-white p-2 rounded shadow text-xs text-gray-700 z-50"
              >
                <ul>
                  {hiddenLabels.map((label) => (
                    <li key={label.id} className="mb-1 flex items-center">
                      <span
                        className="w-2 h-2 rounded-full mr-2 inline-block"
                        style={{ backgroundColor: label.color }}
                      />
                      {label.name}
                    </li>
                  ))}
                </ul>
                <Tooltip.Arrow className="fill-white" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      )}
    </div>
  );
};

export default LabelList;
