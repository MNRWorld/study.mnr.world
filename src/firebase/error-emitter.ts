// src/firebase/error-emitter.ts
import { EventEmitter } from "events";
import { FirestorePermissionError } from "./errors";

// Create a type-safe event emitter
interface TypedEventEmitter {
  on(event: "permission-error", listener: (error: FirestorePermissionError) => void): this;
  off(event: "permission-error", listener: (error: FirestorePermissionError) => void): this;
  emit(event: "permission-error", error: FirestorePermissionError): boolean;
}

class TypedEventEmitter extends EventEmitter {}

export const errorEmitter = new TypedEventEmitter();
