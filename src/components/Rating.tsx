export default function Rating(props: {star: number; count: number; color: string}) {
	const {star, color, count} = props;
	const arr = [1, 2, 3, 4, 5];
	return (
		<span className="flex items-center">
			{arr.map((item, index) => (
				<svg
					key={index}
					fill={item <= star || count === 0 ? "currentColor" : "none"}
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className={`w-4 h-4 text-${color}-500`}
					viewBox="0 0 24 24">
					<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
				</svg>
			))}
			<span className="text-gray-600 ml-1 font-medium">({count})</span>
		</span>
	);
}
