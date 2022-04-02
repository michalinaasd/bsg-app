import React, { useEffect, useRef, useState } from "react";

interface PaginationProps {
  children?: JSX.Element | JSX.Element[];
  pageSize: number;
  pageNr: number;
}

const paginateArray = (array: any, pageSize: number) => {
  return array.reduce((accu: any, curr: any, i: any) => {
    const idx = Math.floor(i / pageSize);
    let page = accu[idx] || (accu[idx] = []);
    page.push(curr);
    return accu;
  }, []);
};

export const Pagination: React.FC<PaginationProps> = (props) => {
  const [childrenArray, setChildrenArray] = useState(
    React.Children.toArray(props.children)
  );
  useEffect(() => {
    setChildrenArray(React.Children.toArray(props.children));
  }, [props.children]);

  return <>{paginateArray(childrenArray, props.pageSize)[props.pageNr]}</>;
};
