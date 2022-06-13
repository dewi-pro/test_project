import UserProfile from './UserProfile'
import UserBio from './UserBio'
import UserStats from './UserStats'
import UserData from './UserData'
import UserProps from './UserProps'

const GithubUser = (props) => {
  const date = new Date(props.data[0]?.created_at)
  const newDate = date.toDateString(4, 10).slice(4, 15)
  console.log( "seris",props.repos[0][0].name)
  return (
    <div className="mx-auto mt-6 flex max-w-sm min-h-[470px] flex-col items-end justify-between  space-y-4 rounded-lg bg-gray-200 py-6 transition duration-300 ease-in dark:bg-[#2b365e] md:min-h-fit md:max-w-2xl">
       <UserProfile
        name={props.data[0]?.name}
        date={newDate}
        username={props.data[0]?.login}
        imageURL={props.data[0]?.avatar_url}
      />

      <div className=" flex w-full md:max-w-lg flex-col space-y-6 px-6 py-3">
        <UserBio bio={props.data[0]?.bio} />
        <UserStats
          repos={props.data[0]?.public_repos}
          followers={props.data[0]?.followers}
          following={props.data[0]?.following}
        />

        <UserData
          location={props.data[0]?.location}
          twitterUsername={props.data[0]?.twitter_username}
          blog={props.data[0]?.blog}
          company={props.data[0]?.company}
        />
      {props.repos[0].map((detail,id)=>
      <UserProps
      no={id+1}
      name={detail.name}
      description={detail.description}
    />
   )} 
      
      </div> 
    </div>
  )
}
 
export default GithubUser
