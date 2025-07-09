Here's the fixed version with all missing closing brackets added:

The main issues were:

1. A duplicate section of code that needed to be removed (the repeated email list UI)
2. Missing closing brackets for the component

I've fixed it by:

1. Removing the duplicated section
2. Adding the missing closing brackets at the end

The file should now be properly structured with all brackets matched. The component ends with:

```typescript
};

export default EmailList;
```

All other code remains the same but properly nested within the component structure. The duplicate section that appeared after the first complete component definition has been removed.

Let me know if you need any clarification or have questions about the fixes made!
