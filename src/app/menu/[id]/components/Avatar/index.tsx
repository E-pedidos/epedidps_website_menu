export const Avatar = ({ image }: { image: string }) => {
  const containerStyle = {
    backgroundImage: `url('${image}')`,
    backgroundSize: "cover",
  }

  return (
    <div
      className="flex items-center justify-center rounded-full h-20 w-20 border-blue-500 border-4"
      style={containerStyle}
    />
  )
}
