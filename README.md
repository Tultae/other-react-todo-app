# 📕 Todo App with React

## Overview

**React**를 사용하여 구현된 Todo App

- 참고 **'https://academy.dream-coding.com/'**

> 사용자는 할 일을 추가, 수정, 삭제할 수 있으며, 'All' , 'Active' , 'Completed' 상태에 따라 할 일을 필터링할 수 있다. 또한 다크 모드 지원이 가능하다.

## Features

- 할 일 추가 , 수정 , 삭제
- 할 일 필터링 : '전체', '활성', '완료'
- **다크 모드** 지원
- **local storage** 저장

## Test

![화면 기록 2023-09-05 오후 11 17 38](https://github.com/Tultae/other-react-todo-app/assets/129868019/9e3bf369-916d-4029-b6eb-72c07bf4d5a1)

## Usage

- 할 일을 추가하기 위해 하단의 텍스트 박스에 내용을 입력하고 'Add' 버튼을 클릭한다.
- 할 일 옆의 체크박스를 클릭하여 상태를 'Active'과 'Completed' 사이에서 변경할 수 있다.
- 할 일 옆의 휴지통 아이콘을 클릭하여 할 일을 삭제할 수 있다.
- 상단의 필터 버튼을 사용하여 할 일을 'All', 'Active', 'Completed'로 필터링할 수 있다.
- 상단의 달 / 태양 아이콘을 클릭하여 다크 모드를 활성화 / 비활성화할 수 있다.

#### 새로고침 후에도 list 유지

- **local storage** 사용
  ![화면 기록 2023-09-05 오후 11 22 44](https://github.com/Tultae/other-react-todo-app/assets/129868019/0132b566-4a30-4ec1-919e-db947b024b58)

```javascript
const filters = ['all', 'active', 'completed'];

const AppTodo = () => {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Todo filter={filter} />
    </DarkModeProvider>
  );
};
```

- 초기 filter 상태는 '**all**' 이므로 리렌더링시 '**all**'로 초기화
