import React from "react";
import "./Pagination.css";

export default class ReactPagination extends React.Component {
    state = {
        firstThreeArray: [1],
        lastNumber: "",
        showEllipis: true
    };

    componentDidMount() {
        if (this.props.totalPages <= 5) {
            var fArray = [];

            for (var i = 1; i <= this.props.totalPages; i++) {
                fArray.push(i);
            }

            this.setState({ firstThreeArray: fArray });
        } else {
            if (this.props.currentPage < 3) {
                this.setState({ firstThreeArray: [1, 2, 3] });
            } else {
                fArray = [];
                var index = 1;
                for (let j = this.props.currentPage; j >= 0; j--) {
                    fArray.push(j);
                    if (index === 3) {
                        break;
                    }
                    index++;
                }

                fArray.reverse();
                this.setState({ firstThreeArray: fArray });
            }
            this.setState({ lastNumber: this.props.totalPages });
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.totalPages <= 5) {
            var fArray = [];

            for (var i = 1; i <= nextProps.totalPages; i++) {
                fArray.push(i);
            }
            this.setState({ firstThreeArray: fArray });
        } else {
            if (
                this.props.currentPage !== nextProps.currentPage ||
                this.props.totalPages !== nextProps.totalPages
            ) {
                if (nextProps.currentPage < 3) {
                    this.setState({ firstThreeArray: [1, 2, 3] });
                } else {
                    fArray = [];
                    fArray.push(nextProps.currentPage - 1);
                    fArray.push(nextProps.currentPage);
                    if (nextProps.currentPage + 1 < nextProps.totalPages) {
                        fArray.push(nextProps.currentPage + 1);
                    }
                    if (
                        nextProps.currentPage === nextProps.totalPages - 2 ||
                        nextProps.currentPage === nextProps.totalPages - 1 ||
                        nextProps.currentPage === nextProps.totalPages
                    ) {
                        this.setState({ showEllipis: false });
                    } else {
                        this.setState({ showEllipis: true });
                    }
                    this.setState({ firstThreeArray: fArray });
                }
                this.setState({ lastNumber: nextProps.totalPages });
            }
        }
    }

    prev = () => {
        if (this.props.currentPage > 1) {
            this.props.changeCurrentPage(this.props.currentPage - 1);
        }
    };

    next = () => {
        if (this.props.currentPage < this.props.totalPages) {
            this.props.changeCurrentPage(this.props.currentPage + 1);
        }
    };

    changeCurrentPage = no => {
        this.props.changeCurrentPage(no);
    };

    showEllipsis = () => {
        if (this.state.showEllipis) {
            return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a>
                    <li>...</li>
                </a>
            );
        }
    };
    isactive = currentPage => {
        if (this.props.currentPage == currentPage) {
            return true;
        }
        return false;
    };
    showLastPagi = () => {
        if (this.props.currentPage !== this.props.totalPages) {
            return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                    className={this.isactive(this.props.totalPages) ? "is-active" : ""}
                    onClick={() => {
                        this.changeCurrentPage(this.props.totalPages);
                    }}
                >
                    <li>{this.props.totalPages}</li>
                </a>
            );
        }
    };
    showPrev = () => {
        if (this.props.currentPage !== 1) {
            return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a onClick={this.prev}>
                    <li>{"<"}</li>
                </a>
            );
        }
    };
    showNext = () => {
        if (this.props.currentPage < this.props.totalPages) {
            return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a onClick={this.next}>
                    <li>{">"}</li>
                </a>
            );
        }
    };

    render() {
        return (
            <div className={this.props.theme + " pagination"}>
                <ul>
                    {this.showPrev()}
                    {this.props.totalPages <= 5 ? (
                        this.state.firstThreeArray.map((no, index) => {
                            return (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a
                                    key={index}
                                    className={this.isactive(no) ? "is-active" : ""}
                                    onClick={() => {
                                        this.changeCurrentPage(no);
                                    }}
                                >
                                    <li>{no}</li>
                                </a>
                            );
                        })
                    ) : (
                        <>
                            {this.state.firstThreeArray.map((no, index) => {
                                return (
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <a
                                        key={index}
                                        className={this.isactive(no) ? "is-active" : ""}
                                        onClick={() => {
                                            this.changeCurrentPage(no);
                                        }}
                                    >
                                        <li>{no}</li>
                                    </a>
                                );
                            })}
                            {this.showEllipsis()}

                            {this.showLastPagi()}
                        </>
                    )}
                    {this.showNext()}
                </ul>
            </div>
        );
    }
}
ReactPagination.defaultProps = {
    theme: "default",
    currentPage: 1,
    totalPages: 15
};


