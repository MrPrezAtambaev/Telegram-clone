import SearchIcon from "@mui/icons-material/Search";
import search from "./search.module.scss";
import { SearchProps } from "./interfaces";

const Search = ({ value, setValue }: SearchProps) => {
	return (
		<div className={search.wrapper}>
			<SearchIcon />
			<input
				placeholder="Search"
				className={search.inp}
				value={value}
				onChange={(e): void => setValue(e.target.value)}
			/>
		</div>
	);
};

export default Search;
