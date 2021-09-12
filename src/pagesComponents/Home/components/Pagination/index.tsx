import { Select } from 'components/Select';
import { HomeContext } from 'pagesComponents/Home/Provider/Context';
import { useContext, useMemo } from 'react';
import * as S from './styles';

const selectOptions = [
  { value: '6', label: '6 usuários' },
  { value: '10', label: '10 usuários' },
  { value: '20', label: '20 usuários' },
];

export const Pagination = () => {
  const {
    currentPage,
    itemsPerPage,
    totalItems,
    nextPage,
    previousPage,
    loading,
    error,
    changeItemsPerPage,
  } = useContext(HomeContext);

  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [itemsPerPage, totalItems]
  );

  const hasNextPage = useMemo(
    () => currentPage < totalPages,
    [currentPage, totalPages]
  );
  const hasPreviousPage = useMemo(() => currentPage > 1, [currentPage]);
  const range = useMemo(() => {
    const initial = (currentPage - 1) * itemsPerPage + 1;
    let final: number;
    if (hasNextPage) {
      final = initial + itemsPerPage - 1;
    } else {
      const itemsInThisPage = totalItems - itemsPerPage * (totalPages - 1);
      final = initial + itemsInThisPage - 1;
    }

    return {
      initial,
      final,
    };
  }, [currentPage, hasNextPage, itemsPerPage, totalItems, totalPages]);

  const PreviousPageDisabled = useMemo(
    () => loading || !hasPreviousPage,
    [hasPreviousPage, loading]
  );
  const nextPageDisabled = useMemo(
    () => loading || !hasNextPage,
    [hasNextPage, loading]
  );

  if(loading || error) return null


  return (
    <S.Container>
      <span>Por página:</span>
      <Select
        onChange={(option) => changeItemsPerPage(Number(option.value))}
        defaultValue={selectOptions[0]}
        options={selectOptions}
      />
      <span>
        {range.initial}-{range.final} de {totalItems}
      </span>

      <S.Icon
        disabled={PreviousPageDisabled}
        src='/icons/arrow-left.svg'
        onClick={!PreviousPageDisabled ? previousPage : undefined}
      />
      <S.Icon
        disabled={nextPageDisabled}
        src='/icons/arrow-right.svg'
        onClick={!nextPageDisabled ? nextPage : undefined}
      />
    </S.Container>
  );
};
