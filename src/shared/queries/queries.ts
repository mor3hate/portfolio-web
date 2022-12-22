import { groq } from 'next-sanity'

const techQuery = groq`*[_type == 'technologies']{
  _id,
  ...
}`

const socialQuery = groq`*[_type == 'socialLinks']{
  icon,
    link,
    title
}`

const projectsQuery = groq`*[_type == 'projects']{
  ...
}`

const aboutQuery = groq`*[_type == 'author']{
  ...
}`

export { techQuery, socialQuery, projectsQuery, aboutQuery }
