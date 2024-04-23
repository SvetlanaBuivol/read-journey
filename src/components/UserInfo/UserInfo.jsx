import { useSelector } from "react-redux";
import { Box, UserAvatar, UserName } from "./UserInfo.styled";
import { getUserName } from "../../redux/auth/authSelectors";
// import { useEffect } from "react";
// import { getCurrentUserAsync } from "../../redux/auth/authOperations";

const UserInfo = () => {
    const name = useSelector(getUserName)
    const firstLetter = name ? name[0] : null

    return (
        firstLetter ?
        <Box>
            <UserAvatar>{firstLetter}</UserAvatar>
            <UserName>{name}</UserName>
        </Box> : null
    )
}

export default UserInfo;