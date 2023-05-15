import Home from 'pages/Home'
import AboutMe from 'pages/AboutMe'
import LeagueOfLegends from 'pages/LeagueOfLegends'
import Packages from 'pages/Packages'
import Posts from 'pages/Posts'

export const home: models.Route = {
  exact: true,
  path: '/',
  component: Home,
}

export const aboutMe: models.Route = {
  path: '/aboutme',
  component: AboutMe,
}

export const leagueOfLegends: models.Route = {
  path: '/league-of-legends',
  component: LeagueOfLegends,
}

export const packages: models.Route = {
  path: '/packages',
  component: Packages,
}

export const posts: models.Route = {
  path: '/posts',
  component: Posts,
}
