class ServiceLocator<T> {
  private map = new Map<string, T | (() => T)>();

  registerSingleTon(name: string, obj: T): void {
    if (this.map.has(name)){
      throw new Error(`${name} is already registered`)
    }
    this.map.set(name, obj);
  }

  registerFactory(name: string, fn: () => T): void {
    if (this.map.has(name)){
      throw new Error(`${name} is already registered`)
    }
    this.map.set(name, fn);
  
  }

  get(name: string) {
    const value = this.map.get(name);
    if (value == null) {
      throw new Error(`${name} is not registered to service locator`);
    }

    if (typeof value === "function") {
      return (value as Function)();
    }
    return value;
  }
}

const serviceLocator = new ServiceLocator();

export default serviceLocator;
