// src/firebase/errors.ts

/**
 * Defines the context for a security rule violation.
 * This information is used to generate a rich error message
 * that helps developers debug their security rules.
 */
export type SecurityRuleContext = {
  // The path of the document or collection being accessed.
  path: string;
  // The operation being performed.
  operation: "get" | "list" | "create" | "update" | "delete";
  // The data being sent with the request (for writes).
  requestResourceData?: any;
};

/**
 * A custom error class for Firestore permission errors.
 * This error should be thrown in development to provide a rich
 * debugging experience when a security rule is violated.
 */
export class FirestorePermissionError extends Error {
  public context: SecurityRuleContext;
  public cause?: any;

  constructor(context: SecurityRuleContext, options?: { cause: any }) {
    const { path, operation } = context;
    const message = `FirestorePermissionError: Insufficient permissions for ${operation} on ${path}.`;
    super(message);
    this.name = "FirestorePermissionError";
    this.context = context;
    this.cause = options?.cause;

    // This is to make the error visible in the Next.js development overlay
    // by attaching the context to the error object.
    (this as any).digest =
      `FIRESTORE_PERMISSION_ERROR\n` + JSON.stringify(context, null, 2);
  }
}
