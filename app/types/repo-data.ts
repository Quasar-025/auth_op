export interface RepoData {
    metadata: {
      full_name: string
      [key: string]: any
    }
    commits: Commit[]
    branches: Branch[]
    contributors: Contributor[]
    languages: Record<string, number>
  }
  
  export interface Commit {
    sha: string
    commit: {
      message: string
      author: {
        name: string
        email: string
        date: string
      }
      [key: string]: any
    }
    author: {
      login: string
      [key: string]: any
    } | null
    parents: Array<{
      sha: string
      [key: string]: any
    }>
    html_url: string
    [key: string]: any
  }
  
  export interface Branch {
    name: string
    commit: {
      sha: string
      [key: string]: any
    }
    [key: string]: any
  }
  
  export interface Contributor {
    login: string
    contributions: number
    [key: string]: any
  }
  
  