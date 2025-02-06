import { useState } from "react";
import {
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { secondaryColor } from "@/styles/theme";

interface TableHeaderProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: string) => void;
  onAddClick: () => void;
}

export default function TableHeader({
  onSearch,
  onFilterChange,
  onAddClick,
}: TableHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setSelectedFilter(event.target.value as string);
    onFilterChange(event.target.value as string);
  };

  return (
    <div
      className="flex justify-between items-center"
      style={{
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      {/* Left Side: Dropdown */}
      <div className="flex space-x-4">
        <Select
          value={selectedFilter}
          onChange={handleFilterChange}
          displayEmpty
          variant="outlined"
          style={{ width: 150 }}
        >
          <MenuItem value="">Filter</MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
      </div>

      {/* Center: Search Bar */}
      <div className="flex grow justify-center">
        <TextField
          variant="outlined"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ width: "300px" }}
        />
      </div>

      {/* Right Side: Add Button */}
      <div className="flex">
        <Button
          variant="contained"
          color="primary"
          onClick={onAddClick}
          style={{ borderRadius: "20px" }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
