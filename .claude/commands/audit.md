# Audit Codebase

Perform a comprehensive audit of this Next.js portfolio codebase. Check the following areas:

## 1. Security
- Look for potential XSS vulnerabilities
- Check for exposed secrets or API keys
- Review any external links for security (rel="noopener noreferrer")
- Verify no sensitive data in client-side code

## 2. Performance
- Check for unoptimized images (should use next/image)
- Look for missing lazy loading opportunities
- Review bundle size concerns (large dependencies)
- Check for unnecessary re-renders in components

## 3. Accessibility (a11y)
- Verify all images have alt text
- Check for proper heading hierarchy (h1, h2, etc.)
- Ensure interactive elements are keyboard accessible
- Look for missing ARIA labels where needed

## 4. SEO
- Verify metadata is properly configured
- Check for missing Open Graph tags
- Ensure semantic HTML is used correctly

## 5. Code Quality
- Look for TypeScript type errors or `any` types
- Check for console.log statements that should be removed
- Identify unused imports or dead code
- Review component structure and organization

## 6. Best Practices
- Verify proper use of Next.js App Router patterns
- Check for missing error boundaries
- Review responsive design implementation

After the audit, provide:
1. A summary of issues found (grouped by severity: critical, warning, info)
2. Specific file locations and line numbers for each issue
3. Recommended fixes for critical and warning items
