import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  InputLabel,
  Card,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
  const router = useRouter();
  const { query } = router;

  // Get 'take' from URL, default to '10' if not present
  const [selectedFilter, setSelectedFilter] = useState(query.take || "10");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (query.take) {
      setSelectedFilter(query.take as string);
    }
  }, [query.take]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    const newTake = event.target.value as string;
    setSelectedFilter(newTake);
    onFilterChange(newTake);

    // Update URL without reloading the page
    router.push(
      {
        pathname: router.pathname,
        query: { ...query, page: 1, take: newTake },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Card elevation={0} className="flex justify-between items-center p-4">
      <div className="flex gap-4">
        {/* Take Dropdown */}
        <FormControl sx={{ width: 80 }}>
          <InputLabel>Take</InputLabel>
          <Select
            value={selectedFilter}
            onChange={handleFilterChange}
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
            sx={{ height: "100%" }}
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
          <Button sx={{ width: 100 }}>Search</Button>
        </div>
      </div>

      {/* Right Side: Add Button */}
      <Button sx={{ width: 100 }} onClick={onAddClick}>
        Add
      </Button>
    </Card>
  );
}
