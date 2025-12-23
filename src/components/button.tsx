export function Button(props: React.ComponentProps<'button'>): React.ReactNode {
	return (
		<button
			type="button"
			className="landingpagecomponents:bg-blue-500 landingpagecomponents:hover:bg-blue-600 landingpagecomponents:text-white landingpagecomponents:px-4 landingpagecomponents:py-2 landingpagecomponents:rounded-md"
			{...props}
		/>
	)
}
