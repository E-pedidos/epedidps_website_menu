
export const Avatar = ({ image }: { image: string }) => {
  if(image){
    return (
      <img
        alt="logo"
        src={image}
        className="flex items-center justify-center rounded-full h-20 w-20 border-blue-500 border-4"
      />
    )
  }
}
