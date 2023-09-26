
const SkeletonElement = ({type}) => {
    
    const styles = {
      avatar: "w-16 h-16 rounded-full",
      text: "h-3 rounded last:w-1/2",
      title: "h-7 rounded",
    } 
  return (
    <div className={`bg-gray-200 ${styles[type]} `}></div>
  )
}


export const PostsSkeleton = () => {
  return (
    <div className="p-5 flex flex-col gap-2 animate-pulse bg-gray-100 rounded-lg mb-2">
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
    </div>
  )
}
export const UserSkeleton = () => {
  return (
    <div className="p-5 flex  gap-2 animate-pulse bg-gray-100 rounded-lg mb-2">
      <div className="flex-1">
        <SkeletonElement type="avatar" />
      </div>
      <div className="flex-[3] flex flex-col gap-2">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  )
}