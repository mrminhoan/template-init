export class BaseSearchModel {
  limit: number
  sort?: 'asc' | 'desc'
  constructor() {
    this.limit = 10
  }
}
