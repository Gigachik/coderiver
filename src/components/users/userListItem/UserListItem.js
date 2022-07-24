import routesByName from "constants/routesByName";
import ava from "images/ava.png";
import more from "images/more.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import calcDistance from "utils/calcDistance";

import style from "./UserListItem.module.css";

const ruleByDistance = {
  low: { style: style.distanceLow, label: "low" },
  normal: { style: style.distanceNormal, label: "normal" },
  high: { style: style.distanceHigh, label: "high" },
  unDetected: { style: style.distanceUnDetected, label: "undetected" },
};
const getRuleByDistance = (distance) => {
  if (!distance) {
    return ruleByDistance.unDetected;
  }
  if (distance < 5000) {
    return ruleByDistance.low;
  }
  if (distance < 10000) {
    return ruleByDistance.normal;
  }
  return ruleByDistance.high;
};

const UserListItem = ({ item }) => {
  const navigate = useNavigate();
  const currentUserCoordinates = useSelector(
    (state) => state.user.currentUserCoordinates
  );

  const distance = calcDistance(currentUserCoordinates, {
    lat: item.address.geo.lat,
    lon: item.address.geo.lng,
  });

  const onProfileClick = (id) => {
    navigate(`${routesByName.users}/${id}`);
  };

  const rule = getRuleByDistance(distance);

  return (
    <tr
      className={style.container}
      key={item.id}
      onClick={() => {
        onProfileClick(item.id);
      }}
    >
      <td>
        <img
          src={ava}
          alt="avatar"
          style={{
            float: "left",
            marginRight: 25,
          }}
        />

        <p>{item.name}</p>
        <span>{item.address.city}</span>
      </td>
      <td>
        <p>{item.company.name}</p>
        <span>{item.company.catchPhrase}</span>
      </td>
      <td>
        <p>{item.email}</p>
        <span>{item.website}</span>
      </td>
      <td>
        <span className={`${style.distance} ${rule.style}`}>{rule.label}</span>
      </td>
      <td>
        <img src={more} alt="icon" />
      </td>
    </tr>
  );
};
export default UserListItem;
