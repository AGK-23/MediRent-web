import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import arrow from "../assets/submenu-arrow.gif";
const TenantNenu = () => {
  const [firstDropdownVisible, setFirstDropdownVisible] = useState(false);
  const [secondDropdownVisible, setSecondDropdownVisible] = useState(false);
  const [thirdDropdownVisible, setThirdDropdownVisible] = useState(false);
  // const [forthDropdownVisible, setForthDropdownVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const dropdownItems = [
    {
      id: 1,
      title: "Alabarna",
      content: "Content 1",
    },
    {
      id: 2,
      title: "alaska",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Arizonia",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 4,
      title: "califonai",
      content: "Content 2",
    },
    {
      id: 5,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 6,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 7,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 8,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 10,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 11,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 12,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 13,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: 14,
      Name: "botsuana",
      item: "Content 2",
    },
    {
      id: "15",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "16",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "17",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "18",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "19",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "20",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "21",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "22",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "23",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "23",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "24",
      Names: "north Dakota",
      Con: "Content 3",
    },
    {
      id: "25",
      Names: "north Dakota",
      Con: "Content 3",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onItemClick = (itemId) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  return (
    <div className="nested-dropdown">
      <div
        className=""
        onMouseEnter={() => setFirstDropdownVisible(true)}
        onMouseLeave={() => setFirstDropdownVisible(false)}
      >
        <div className="">
          <a href="#">Search Location</a>

          {firstDropdownVisible && (
            <div
              className="dropdown-menu"
              style={{
                display: "flex",
                gap: "3em",
                right: "25vw",
                paddingLeft: "130px",
                marginTop: " 6.5vh",
              }}
            >
              <ul className="flex flex-col gap-2 ">
                <li>Search by medical school</li>
                <li>
                  {" "}
                  <Link
                    to="#"
                    className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                  >
                    Popular Locations
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                  >
                    University of Toronto
                  </Link>
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      {" "}
                      University of British Columbia
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      Western University Schulich School of Medicine
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      Mc Master University
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      University of Ottawa
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      University of Calgary
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      McGill University{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      {" "}
                      University of Alberta
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      University of Manitoba
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      {" "}
                      SUNY State University of New York Downstate <br /> Medical
                      Center College of Medicine
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      NOSM University (Northern Ontario School of Medicine){" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      {" "}
                      Dalhousie Medical School-Halifax and New Brunswick Campus
                    </Link>
                  </li>
                </li>
              </ul>

              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="dropdown-item relative top-10"
                onClick={() => setSecondDropdownVisible(!secondDropdownVisible)}
              >
                <Link
                  to="#"
                  className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                >
                  {" "}
                  Canada
                </Link>
                {secondDropdownVisible ? (
                  <FaChevronUp
                    style={{ marginTop: "6px", color: "blue" }}
                    className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                  />
                ) : (
                  <FaChevronUp
                    style={{ marginTop: "6px", color: "blue" }}
                    className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                  />
                )}
              </div>
              {secondDropdownVisible && (
                <div
                  className="nested-dropdown-menu"
                  style={{ position: "absolute", left: "39vw", top: "60px" }}
                >
                  <div
                    className="dropdown-item"
                    style={{ display: "flex", flexDirection: "row" }}
                    onClick={() =>
                      setThirdDropdownVisible(!thirdDropdownVisible)
                    }
                  >
                    Alberta
                    {thirdDropdownVisible ? (
                      <FaChevronUp
                        style={{ marginTop: "6px", color: "blue" }}
                        className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                      />
                    ) : (
                      <FaChevronDown
                        style={{ marginTop: "6px", color: "blue" }}
                        className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                      />
                    )}
                  </div>
                  {thirdDropdownVisible && (
                    <div className="nested-dropdown-menu">
                      <div className="dropDown-items relative right-20">
                        {" "}
                        <h5 style={{}}>
                          University of Alberta Faculty of Medicine and
                          Dentistry (15) University of Calgary Cumming School of
                          Medicine (22)
                        </h5>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="text-dropdown  relative top-10">
                {" "}
                <div
                  className="text ml-20 hover:text-blue-500 hover:transition-colors hover:duration-150"
                  onClick={toggleDropdown}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  {" "}
                  United State{" "}
                  {isOpen ? (
                    <FaChevronUp
                      style={{ marginTop: "6px", color: "blue" }}
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    />
                  ) : (
                    <FaChevronDown
                      style={{ marginTop: "6px", color: "blue" }}
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    />
                  )}
                </div>
                {isOpen && (
                  <div className="dropdown_cont cursor-pointer">
                    {dropdownItems.map((item) => (
                      <div key={item.id} onClick={() => onItemClick(item.id)}>
                        <div
                          style={{
                            position: "relative",
                            bottom: "39vh",
                            marginLeft: "60px",
                            paddingLeft: "60px",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                            }}
                          >
                            {item.Name}
                          </span>
                          {activeItem === item.id && <div>{item.item}</div>}
                        </div>
                        <div
                          style={{
                            position: "relative",
                            bottom: "70vh",
                            marginLeft: "140px",
                            paddingLeft: "90px",
                          }}
                        >
                          {" "}
                          <span>{item.Names}</span>
                          {activeItem === item.id && <div>{item.Con}</div>}
                        </div>
                        <div>{item.title}</div>
                        {activeItem === item.id && <div>{item.content}</div>}
                      </div>
                    ))}
                  </div>
                )}
                <div
                  style={{
                    marginLeft: "30vw",
                    position: "relative",
                    bottom: "25px",
                  }}
                >
                  <Link
                    to="#"
                    className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                  >
                    Europe
                  </Link>
                  <div
                    onClick={toggleDropdown1}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    Oceania{" "}
                    {isOpen1 ? (
                      <FaChevronUp
                        style={{ marginTop: "6px", color: "blue" }}
                        className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                      />
                    ) : (
                      <FaChevronDown
                        style={{ marginTop: "6px", color: "blue" }}
                        className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                      />
                    )}
                  </div>
                  {isOpen1 && (
                    <div>
                      California
                      <div
                        onClick={toggleDropdown2}
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        Pennsylvania{" "}
                        {isOpen2 ? (
                          <FaChevronUp
                            style={{ marginTop: "6px", color: "blue" }}
                            className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                          />
                        ) : (
                          <FaChevronDown
                            style={{ marginTop: "6px", color: "blue" }}
                            className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                          />
                        )}
                      </div>
                      {isOpen2 && (
                        <div>
                          New York
                          <div
                            onClick={toggleDropdown3}
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            South Carolina{" "}
                            {isOpen3 ? (
                              <FaChevronUp
                                style={{ marginTop: "6px", color: "blue" }}
                                className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                              />
                            ) : (
                              <FaChevronDown
                                style={{ marginTop: "6px", color: "blue" }}
                                className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                              />
                            )}
                          </div>
                          {isOpen3 && <div>South Africa</div>}
                        </div>
                      )}
                    </div>
                  )}
                  <div
                    onClick={toggleDropdown2}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    Hawaii{" "}
                    {isOpen2 ? (
                      <FaChevronUp
                        style={{ marginTop: "6px", color: "blue" }}
                        className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                      />
                    ) : (
                      <FaChevronDown
                        style={{ marginTop: "6px", color: "blue" }}
                        className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                      />
                    )}
                  </div>
                  {isOpen2 && <div>Caribbean</div>}
                  <div>
                    <Link
                      to=""
                      className="hover:text-blue-500 hover:transition-colors hover:duration-150"
                    >
                      Other Countries
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TenantNenu;
