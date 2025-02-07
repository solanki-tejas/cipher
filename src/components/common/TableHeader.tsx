import { useState } from "react";
import {
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Card,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { primaryColor, secondaryColor } from "@/styles/theme";

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
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("10");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setSelectedFilter(event.target.value as string);
    onFilterChange(event.target.value as string);
  };

  return (
    <Card elevation={0} className="flex justify-between items-center p-4">
      <div className="flex gap-4">
        {/* Take Dropdown */}
        <FormControl
          sx={{
            width: 80,
          }}
        >
          <InputLabel id="demo-simple-select-label">Take</InputLabel>
          <Select
            value={selectedFilter}
            onChange={handleFilterChange}
            displayEmpty
            label="Take"
          >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="30">30</MenuItem>
          </Select>
        </FormControl>

        <div className="flex items-center gap-2">
          {/* Search Bar */}
          <TextField
            sx={{
              height: "100%",
            }}
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
          />
          <Button sx={{ width: 100 }} onClick={onAddClick}>
            Search
          </Button>
        </div>
      </div>

      {/* Right Side: Add Button */}
      <Button sx={{ width: 100 }} onClick={onAddClick}>
        Add
      </Button>
    </Card>
  );
}
