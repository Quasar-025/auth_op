// types/github.ts
export interface Author {
    avatar_url: string;
    login: string;
    id: number;
  }
  
  export interface Commit {
    sha: string;
    html_url: string;
    commit: {
      message: string;
      author: {
        name: string;
        date: string;
      };
    };
    author: Author;
    parents: Array<{
      sha: string;
      url: string;
    }>;
  }
  
  export interface Branch {
    name: string;
    commit: {
      sha: string;
    };
  }
  
  export interface RepositoryData {
    branches: Branch[];
    commits: Commit[];
  }
  