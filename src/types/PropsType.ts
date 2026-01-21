export interface HeaderProps {
    searchText: string;
    setSearchText: (text: string) => void;
}

export interface SearchProps {
    value: string;
    onChange: (text: string) => void;
}

export interface PostsListProps {
    searchText: string;
}