export class UiUtils {
  private constructor() {}

  private static shouldBeNumber(value: unknown): boolean {
    return typeof value === 'string' && !isNaN(Number(value));
  }

  static updateSelectedOptions<T>(event: Event, selectedOptions: T[]): T[] {
    const target = event.target as HTMLInputElement;
    const value = this.shouldBeNumber(target.value)
      ? (Number(target.value) as T)
      : (target.value as T);
    const checked = target.checked;
    console.log('Value type:', typeof value);

    if (checked) {
      selectedOptions.push(value);
    } else {
      selectedOptions = selectedOptions.filter((option) => option !== value);
    }
    return selectedOptions;
  }
}
