import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Stack,
  TablePagination,
  TextField,
} from "@mui/material";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ItemsList,
  StockList,
  categoryList,
  deleteCategory,
  deleteManyItems,
  getItemById,
  paginationOfItems,
} from "../../Actions/login";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import CustomPagination from "../Assets/CustomPagination";

const Categories = () => {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsperpage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterdCategories, setFilterdCategories] = useState([]);

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [selectcatg, setSelectcatg] = useState("");
  const [open, setOpen] = useState(false);
  const [itemId, setItemId] = useState();
  const [check, setCheck] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryList());
    const getCategory = {};
    localStorage.setItem("getCategory", JSON.stringify(getCategory));
  }, [dispatch, isDeleted]);

  const { category } = useSelector((state) => state.category);
  const { count } = useSelector((state) => state.count);
  console.log("...........", count);

  const handleCheckboxChange = (categoryId) => {
    if (selectedCategoryIds.includes(categoryId)) {
      setSelectedCategoryIds((prevIds) =>
        prevIds.filter((id) => id !== categoryId)
      );
    } else {
      setSelectedCategoryIds((prevIds) => [...prevIds, categoryId]);
    }
  };

  const handleSelectAllChange = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setSelectedCategoryIds([]);
  };
  const itemsPerPage = rowsPerPage;
  const totalPages = Math.ceil(category?.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = category?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchProducts = () => {
      const searchTermLowercase = searchTerm.toLowerCase();
      const filteredCategory = category?.filter((product) =>
        product.name.toLowerCase().includes(searchTermLowercase)
      );
      setFilterdCategories(filteredCategory);
    };
    fetchProducts();
  }, [searchTerm]);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Do you really want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    });
    if (result.isConfirmed) {
      dispatch(deleteCategory(selectedCategoryIds))
        .then((res) => {
          if (res.success) {
            toast.success(res.message, {
              position: toast.POSITION.TOP_LEFT,
              autoClose: 3000,
            });
            setIsDeleted(!isDeleted);
            setSelectedCategoryIds([]);
          } else {
            toast.error(res.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          }
        })
        .catch((err) => {
          toast.error(err.res.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 3000,
          });
        });
    } else {
      toast.error("Cancelled", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <div className="title">Categories</div>
      <div className="itemspage">
        <div className="categorypage-setup">
          <div className="addItems">
            <Button style={{ backgroundColor: "#0f5171" }}>
              <a
                href="/createCategory"
                style={{ textDecoration: "none", color: "white" }}
              >
                +ADD CATEGORY
              </a>
            </Button>
            {selectedCategoryIds.length > 0 || selectAll ? (
              <>
                {" "}
                <Button
                  onClick={handleDelete}
                  style={{
                    color: "white",
                    backgroundColor: "darkred",
                    marginLeft: "40px",
                  }}
                >
                  Delete
                </Button>
              </>
            ) : (
              ""
            )}
            <span >
                    <input
                      type="text"
                      placeholder="Search category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </span>
            <TableContainer component={Paper} style={{ boxShadow: "none" }}>
              <Table aria-label="simple table">
                <TableHead sx={{ color: "red" }}>
                  <TableRow>
                    <TableCell
                      style={{
                        color: "rgba(154, 151, 151, 0.915)",
                        padding: "5px",
                      }}
                    >
                      <Checkbox
                        checked={selectAll}
                        onChange={handleSelectAllChange}
                      />
                    </TableCell>
                    <TableCell
                      style={{
                        color: "rgba(154, 151, 151, 0.915)",
                        padding: "5px",
                      }}
                    >
                      Name
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterdCategories?.length > 0 ? filterdCategories?.map((cat)=>(
                    <TableRow
                    key={cat._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                    onClick={()=>navigate(`/updateCategory/${cat._id}`)}
                  >
                    <TableCell style={{ padding: "5px" }}>
                      <Checkbox
                        checked={
                          selectAll || selectedCategoryIds.includes(cat._id)
                        }
                        onChange={() => handleCheckboxChange(cat._id)}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ padding: "5px" }}
                    >
                      {cat.name}
                    </TableCell>
                  </TableRow>
                  )):
                  
                  currentItems?.map((cat) => (
                      <TableRow
                        key={cat._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        onClick={()=>navigate(`/updateCategory/${cat._id}`)}
                      >
                        <TableCell style={{ padding: "5px" }}>
                          <Checkbox
                            checked={
                              selectAll || selectedCategoryIds.includes(cat._id)
                            }
                            onChange={() => handleCheckboxChange(cat._id)}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ padding: "5px" }}
                        >
                          {cat.name}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <hr style={{ borderTop: "0.1px black" }}></hr>
            <div className="pageno">
              {/* <Button>
                <ArrowBackIosIcon
                  style={{ border: "0.5px solid black", padding: "5px" }}
                />
              </Button>
              <Button>
                <ArrowForwardIosIcon
                  style={{ border: "0.5px solid black", padding: "5px" }}
                />
              </Button> */}
              {/* <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              /> */}
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
              <InputLabel
                id="demo-simple-select-label"
                style={{ marginLeft: "20px" }}
              >
                PageNo:
              </InputLabel>
              <div></div>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginLeft: "20px" }}
              >
                RowsPerPage:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                sx={{ fontSize: 15, padding: "0px" }}
                label="RowsPerPage"
                value={rowsPerPage}
                onChange={(e)=>setRowsperpage(e.target.value)}
              >
                <MenuItem value={10} sx={{ padding: 0 }}>
                  10
                </MenuItem>
                <MenuItem value={25} sx={{ padding: 0 }}>
                  25
                </MenuItem>
                <MenuItem value={50} sx={{ padding: 0 }}>
                  50
                </MenuItem>
                <MenuItem value={100} sx={{ padding: 0 }}>
                  100
                </MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
