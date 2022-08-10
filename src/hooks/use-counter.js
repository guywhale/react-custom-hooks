import { useEffect, useState } from 'react';
/**
 * Custom hook name MUST start with 'use' e.g. useCustomHook()
 * Possible to have arguments and set default values for arguments
 */
const useCounter = (forwards = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [forwards]);

	/**
	 * Make sure to return something. You can return any data type, doesn't
	 * have to be an array like React hooks.
	 */
	return counter;
};

export default useCounter;
