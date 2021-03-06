import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {Logout} from "store/userSlice";

export default function LogoutPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Logout());
	}, [dispatch]);

	return <Redirect to="/login" />;
}
