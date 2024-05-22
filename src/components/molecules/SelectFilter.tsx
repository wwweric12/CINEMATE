import styled from 'styled-components';

type SelectOption = 'latest' | 'like' | 'old' | 'grade';

export interface SelectFilterProps {
  defaultOption: SelectOption;
  onSelectChange: (selectoption: SelectFilterProps['defaultOption']) => void;
}

const OPTIONS: { value: SelectOption; name: string }[] = [
  { value: 'latest', name: '최신순' },
  { value: 'like', name: '좋아요 순' },
  { value: 'old', name: '오래된 순' },
  { value: 'grade', name: '평점순' },
];

const SelectFilter = ({ defaultOption, onSelectChange }: SelectFilterProps) => {
  const handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const selectedOption = e.currentTarget
      .value as SelectFilterProps['defaultOption'];
    onSelectChange(selectedOption);
  };

  return (
    <SelectWrapper>
      <SelectContainer onChange={handleSelectChange}>
        {OPTIONS.map((item) => (
          <SelectOption
            key={item.value}
            value={item.value}
            defaultValue={defaultOption}
          >
            {item.name}
          </SelectOption>
        ))}
      </SelectContainer>
    </SelectWrapper>
  );
};

export default SelectFilter;

const SelectWrapper = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 999px;
`;

const SelectContainer = styled.select`
  text-align: center;
  background-color: transparent;
  font-size: 12px;
  border: none;
  padding: 6px 3px;
`;

const SelectOption = styled.option``;
