
const UserProps = ({name,description}) => {
  return (
    <div className="grid grid-cols-1 gap-6 px-2 py-4 md:grid-cols-1 md:gap-x-10">
          <div className="flex items-center  space-x-2 font-semibold text-white transition-colors duration-150 hover:text-blue-400">
            <p className="font-mono text-sm font-medium text-gray-900 dark:text-gray-300">
              {name ? name : ""} : {description? description : "No Description"}
            </p>
          </div>
        </div>
  )
}

export default UserProps