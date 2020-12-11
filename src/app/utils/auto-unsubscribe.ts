export function AutoUnsubscribe(constructor): void {
  const original = constructor.prototype.ngOnDestroy;

  function destroy(): void {
    for (const prop in this) {
      if (this.hasOwnProperty(prop)) {
        const property = this[prop];
        if (property && typeof property.unsubscribe === 'function') {
          property.unsubscribe();
        }
      }
    }
    if (original && typeof original === 'function') {
      original.apply(this, arguments);
    }
  }

  constructor.prototype.ngOnDestroy = destroy;
}
