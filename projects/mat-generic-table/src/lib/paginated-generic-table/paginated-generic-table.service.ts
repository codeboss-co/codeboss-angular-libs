import { Injectable } from '@angular/core';
import { PagedResult, PaginatedEndpoint, Sort } from '../pagination.models';
import { Observable } from 'rxjs';
import { IPaginatedDataSource, PaginatedDataSource } from '../paginated.data-source';

export interface IPaginatedTableService extends IPaginatedDataSource
{
    readonly dataSource: IPaginatedDataSource | null;
}

@Injectable()
export class PaginatedGeneralTableService<TModel, TQuery> implements IPaginatedTableService {

    public readonly dataSource: PaginatedDataSource<TModel, TQuery> | null;

    // @ts-ignore
    page$: Observable<PagedResult<TModel>>;

    constructor(
        private endpoint: PaginatedEndpoint<TModel, TQuery>,
        initialSort: Sort<TModel>,
        initialQuery: TQuery)
    {
        this.dataSource = new PaginatedDataSource<TModel, TQuery>(
            endpoint, initialSort, initialQuery
        );

        // @ts-ignore
      this.page$ = this.dataSource.page$;
    }

    queryBy(query: Partial<TQuery>): void
    {
        this.dataSource.queryBy(query);
    }

    fetch(page: number): void
    {
        this.dataSource.fetch(page);
    }
}
