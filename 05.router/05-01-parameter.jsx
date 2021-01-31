import * as React from "react";
import {} from "react-route-dom";
import qs from "";

/**
 * URL Parameter: 특정 데이터를 조회할 때
 * Query: 다양한 옵션을 줘서 조회할 때 (검색 조건)
 *
 */

const profileData = {
  cater: {
    name: "cater",
    description: "FE+3",
  },
};

export const Profile = ({ match, location }) => {
  console.log(location);
  return <div></div>;
};

const App = () => {};
