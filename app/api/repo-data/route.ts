import { NextResponse } from "next/server"
import type { RepoData } from '../../types/repo-data';

// This is a mock implementation. In a real app, you would fetch data from GitHub API
// or use a pre-generated JSON file stored in your project
export async function GET() {
  try {
    // Sample data structure - replace with actual data fetching logic
    const mockData: RepoData = {
    "branches": [
        {
            "commit": {
                "sha": "effcaacede7be00e76f5749bcc1d34ba3df5b9d2",
                "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/effcaacede7be00e76f5749bcc1d34ba3df5b9d2"
            },
            "name": "dev",
            "protected": false,
            "protection": {
                "enabled": false,
                "required_status_checks": {
                    "checks": [],
                    "contexts": [],
                    "enforcement_level": "off"
                }
            },
            "protection_url": "https://api.github.com/repos/theg1239/ExamCooker/branches/dev/protection"
        },
        {
            "commit": {
                "sha": "4a1f102add7bcffdead301b31a15654d5451e444",
                "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4a1f102add7bcffdead301b31a15654d5451e444"
            },
            "name": "main",
            "protected": false,
            "protection": {
                "enabled": false,
                "required_status_checks": {
                    "checks": [],
                    "contexts": [],
                    "enforcement_level": "off"
                }
            },
            "protection_url": "https://api.github.com/repos/theg1239/ExamCooker/branches/main/protection"
        }
    ],
    "code_frequency": {},
    "commit_activity": {},
    "commits": [
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/52027622?v=4",
                "events_url": "https://api.github.com/users/theg1239/events{/privacy}",
                "followers_url": "https://api.github.com/users/theg1239/followers",
                "following_url": "https://api.github.com/users/theg1239/following{/other_user}",
                "gists_url": "https://api.github.com/users/theg1239/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/theg1239",
                "id": 52027622,
                "login": "theg1239",
                "node_id": "MDQ6VXNlcjUyMDI3NjIy",
                "organizations_url": "https://api.github.com/users/theg1239/orgs",
                "received_events_url": "https://api.github.com/users/theg1239/received_events",
                "repos_url": "https://api.github.com/users/theg1239/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/theg1239/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/theg1239/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/theg1239",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4a1f102add7bcffdead301b31a15654d5451e444/comments",
            "commit": {
                "author": {
                    "date": "2025-01-27T21:52:05Z",
                    "email": "52027622+theg1239@users.noreply.github.com",
                    "name": "theg"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-27T21:52:05Z",
                    "email": "52027622+theg1239@users.noreply.github.com",
                    "name": "theg"
                },
                "message": "chore",
                "tree": {
                    "sha": "33b55c5f46cb5aa979504cba077652757ba1f3db",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/33b55c5f46cb5aa979504cba077652757ba1f3db"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/4a1f102add7bcffdead301b31a15654d5451e444",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/52027622?v=4",
                "events_url": "https://api.github.com/users/theg1239/events{/privacy}",
                "followers_url": "https://api.github.com/users/theg1239/followers",
                "following_url": "https://api.github.com/users/theg1239/following{/other_user}",
                "gists_url": "https://api.github.com/users/theg1239/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/theg1239",
                "id": 52027622,
                "login": "theg1239",
                "node_id": "MDQ6VXNlcjUyMDI3NjIy",
                "organizations_url": "https://api.github.com/users/theg1239/orgs",
                "received_events_url": "https://api.github.com/users/theg1239/received_events",
                "repos_url": "https://api.github.com/users/theg1239/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/theg1239/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/theg1239/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/theg1239",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/4a1f102add7bcffdead301b31a15654d5451e444",
            "node_id": "C_kwDOM8WH19oAKDRhMWYxMDJhZGQ3YmNmZmRlYWQzMDFiMzFhMTU2NTRkNTQ1MWU0NDQ",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d397f009400146d0a1627f8465c8ce6c19695955",
                    "sha": "d397f009400146d0a1627f8465c8ce6c19695955",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d397f009400146d0a1627f8465c8ce6c19695955"
                }
            ],
            "sha": "4a1f102add7bcffdead301b31a15654d5451e444",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4a1f102add7bcffdead301b31a15654d5451e444"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/52027622?v=4",
                "events_url": "https://api.github.com/users/theg1239/events{/privacy}",
                "followers_url": "https://api.github.com/users/theg1239/followers",
                "following_url": "https://api.github.com/users/theg1239/following{/other_user}",
                "gists_url": "https://api.github.com/users/theg1239/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/theg1239",
                "id": 52027622,
                "login": "theg1239",
                "node_id": "MDQ6VXNlcjUyMDI3NjIy",
                "organizations_url": "https://api.github.com/users/theg1239/orgs",
                "received_events_url": "https://api.github.com/users/theg1239/received_events",
                "repos_url": "https://api.github.com/users/theg1239/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/theg1239/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/theg1239/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/theg1239",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d397f009400146d0a1627f8465c8ce6c19695955/comments",
            "commit": {
                "author": {
                    "date": "2025-01-27T21:51:06Z",
                    "email": "52027622+theg1239@users.noreply.github.com",
                    "name": "theg"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-27T21:51:06Z",
                    "email": "52027622+theg1239@users.noreply.github.com",
                    "name": "theg"
                },
                "message": "Merge branch 'main' of https://github.com/theg1239/ExamCooker",
                "tree": {
                    "sha": "83204fc35a47d4e6fa04f5b1468b4d14823a019e",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/83204fc35a47d4e6fa04f5b1468b4d14823a019e"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/d397f009400146d0a1627f8465c8ce6c19695955",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/52027622?v=4",
                "events_url": "https://api.github.com/users/theg1239/events{/privacy}",
                "followers_url": "https://api.github.com/users/theg1239/followers",
                "following_url": "https://api.github.com/users/theg1239/following{/other_user}",
                "gists_url": "https://api.github.com/users/theg1239/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/theg1239",
                "id": 52027622,
                "login": "theg1239",
                "node_id": "MDQ6VXNlcjUyMDI3NjIy",
                "organizations_url": "https://api.github.com/users/theg1239/orgs",
                "received_events_url": "https://api.github.com/users/theg1239/received_events",
                "repos_url": "https://api.github.com/users/theg1239/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/theg1239/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/theg1239/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/theg1239",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/d397f009400146d0a1627f8465c8ce6c19695955",
            "node_id": "C_kwDOM8WH19oAKGQzOTdmMDA5NDAwMTQ2ZDBhMTYyN2Y4NDY1YzhjZTZjMTk2OTU5NTU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/df1560045e5a6f430058512aa7ffc53bb0c810f5",
                    "sha": "df1560045e5a6f430058512aa7ffc53bb0c810f5",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/df1560045e5a6f430058512aa7ffc53bb0c810f5"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/51160891601208f5d29266e32ab79e6da3b628f4",
                    "sha": "51160891601208f5d29266e32ab79e6da3b628f4",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/51160891601208f5d29266e32ab79e6da3b628f4"
                }
            ],
            "sha": "d397f009400146d0a1627f8465c8ce6c19695955",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d397f009400146d0a1627f8465c8ce6c19695955"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/52027622?v=4",
                "events_url": "https://api.github.com/users/theg1239/events{/privacy}",
                "followers_url": "https://api.github.com/users/theg1239/followers",
                "following_url": "https://api.github.com/users/theg1239/following{/other_user}",
                "gists_url": "https://api.github.com/users/theg1239/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/theg1239",
                "id": 52027622,
                "login": "theg1239",
                "node_id": "MDQ6VXNlcjUyMDI3NjIy",
                "organizations_url": "https://api.github.com/users/theg1239/orgs",
                "received_events_url": "https://api.github.com/users/theg1239/received_events",
                "repos_url": "https://api.github.com/users/theg1239/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/theg1239/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/theg1239/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/theg1239",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/df1560045e5a6f430058512aa7ffc53bb0c810f5/comments",
            "commit": {
                "author": {
                    "date": "2025-01-27T21:51:01Z",
                    "email": "52027622+theg1239@users.noreply.github.com",
                    "name": "theg"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-27T21:51:01Z",
                    "email": "52027622+theg1239@users.noreply.github.com",
                    "name": "theg"
                },
                "message": "chore: add 2025 year",
                "tree": {
                    "sha": "1d33375d0087bb8e45aee5e8ddd55e2a481af854",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/1d33375d0087bb8e45aee5e8ddd55e2a481af854"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/df1560045e5a6f430058512aa7ffc53bb0c810f5",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/52027622?v=4",
                "events_url": "https://api.github.com/users/theg1239/events{/privacy}",
                "followers_url": "https://api.github.com/users/theg1239/followers",
                "following_url": "https://api.github.com/users/theg1239/following{/other_user}",
                "gists_url": "https://api.github.com/users/theg1239/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/theg1239",
                "id": 52027622,
                "login": "theg1239",
                "node_id": "MDQ6VXNlcjUyMDI3NjIy",
                "organizations_url": "https://api.github.com/users/theg1239/orgs",
                "received_events_url": "https://api.github.com/users/theg1239/received_events",
                "repos_url": "https://api.github.com/users/theg1239/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/theg1239/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/theg1239/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/theg1239",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/df1560045e5a6f430058512aa7ffc53bb0c810f5",
            "node_id": "C_kwDOM8WH19oAKGRmMTU2MDA0NWU1YTZmNDMwMDU4NTEyYWE3ZmZjNTNiYjBjODEwZjU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/1cc82cf878e48387256c3c713b19246d04ddd39b",
                    "sha": "1cc82cf878e48387256c3c713b19246d04ddd39b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/1cc82cf878e48387256c3c713b19246d04ddd39b"
                }
            ],
            "sha": "df1560045e5a6f430058512aa7ffc53bb0c810f5",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/df1560045e5a6f430058512aa7ffc53bb0c810f5"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/115440133?v=4",
                "events_url": "https://api.github.com/users/tanushgolwala/events{/privacy}",
                "followers_url": "https://api.github.com/users/tanushgolwala/followers",
                "following_url": "https://api.github.com/users/tanushgolwala/following{/other_user}",
                "gists_url": "https://api.github.com/users/tanushgolwala/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/tanushgolwala",
                "id": 115440133,
                "login": "tanushgolwala",
                "node_id": "U_kgDOBuF6BQ",
                "organizations_url": "https://api.github.com/users/tanushgolwala/orgs",
                "received_events_url": "https://api.github.com/users/tanushgolwala/received_events",
                "repos_url": "https://api.github.com/users/tanushgolwala/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/tanushgolwala/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/tanushgolwala/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/tanushgolwala",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/51160891601208f5d29266e32ab79e6da3b628f4/comments",
            "commit": {
                "author": {
                    "date": "2025-01-26T15:02:53Z",
                    "email": "115440133+tanushgolwala@users.noreply.github.com",
                    "name": "Tanush Golwala"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-26T15:02:53Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #221 from drashtishukla/main\n\nfeat: real new tab redirect",
                "tree": {
                    "sha": "c7f6355f1619ec743c531742dfebd6dc37e9b406",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/c7f6355f1619ec743c531742dfebd6dc37e9b406"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/51160891601208f5d29266e32ab79e6da3b628f4",
                "verification": {
                    "payload": "tree c7f6355f1619ec743c531742dfebd6dc37e9b406\nparent 193ad6bc8c819a306becd3403a6df6058bd5095a\nparent 74b7eae80307dcacfe7fcd9bf1bc35ee68029358\nauthor Tanush Golwala <115440133+tanushgolwala@users.noreply.github.com> 1737903773 +0530\ncommitter GitHub <noreply@github.com> 1737903773 +0530\n\nMerge pull request #221 from drashtishukla/main\n\nfeat: real new tab redirect",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnlk6dCRC1aQ7uu5UhlAAAzdcQAI2w3xEeS1+kbxpxeMa6dOgJ\n9VStjrizb5+pI89P/Juo5lC/TmoLHouXyt/MMK4mDN5z5lqV+zV/+edU3KXQs8t2\nC9Db8ar2PAgIj+/mwLp8snVKLcJCsAZ22wRnKyhr9OAKVrMa0OM0dShmG09nl49I\n9ejXlJRHB5yCnHmZGNE6bnZur5yK+Tmfm1cvis8n1LtWdLXWaviF4j+zTeJnljxc\nWX6xfCa4HLwY8DntYnT8Y+FrBlZn8ct2xgcz2AljIdKIgN5WlFZzXGuDhYTqRp1y\ngdjmKsqh7+3AeYHSIyoqrHyfDh87zCNmw33QmeFBRW1HkEzwBx89vPMy85Q3vSkV\n4oNUnl6wh2On75buSp1JABE0nb6zTZ0MLXAqvxO2nRPmPFR0lSTQarzvV0lU8TGW\naJ9DPKpOJjNTBvRGxANwIMQ5mzTjLVmXrXwXwDMz3h6Poj6t8NjpDYmk4024cvYG\nebT0qxob6GIunsk5cDpj6jAeUs+pzNKylophEhgPtX231tEBCp5ubSaP/uU4ZpZ4\neqimpGIwipTDY99SzPnIM9+zqNFXB92P2zwCiP/qaZvPKD7ZZH66vvMaj0JjVGBU\nrTIWz8OC6Tk1Js4AvDf5khRkOrLLUymOYuNAVFw1qBxL8h5/mjjLX67trkJNptZv\nf4xz346VNfSbkxQA9lqA\n=EJxH\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2025-01-26T15:02:55Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/51160891601208f5d29266e32ab79e6da3b628f4",
            "node_id": "C_kwDOM8WH19oAKDUxMTYwODkxNjAxMjA4ZjVkMjkyNjZlMzJhYjc5ZTZkYTNiNjI4ZjQ",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/193ad6bc8c819a306becd3403a6df6058bd5095a",
                    "sha": "193ad6bc8c819a306becd3403a6df6058bd5095a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/193ad6bc8c819a306becd3403a6df6058bd5095a"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/74b7eae80307dcacfe7fcd9bf1bc35ee68029358",
                    "sha": "74b7eae80307dcacfe7fcd9bf1bc35ee68029358",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/74b7eae80307dcacfe7fcd9bf1bc35ee68029358"
                }
            ],
            "sha": "51160891601208f5d29266e32ab79e6da3b628f4",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/51160891601208f5d29266e32ab79e6da3b628f4"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164759561?v=4",
                "events_url": "https://api.github.com/users/drashtishukla/events{/privacy}",
                "followers_url": "https://api.github.com/users/drashtishukla/followers",
                "following_url": "https://api.github.com/users/drashtishukla/following{/other_user}",
                "gists_url": "https://api.github.com/users/drashtishukla/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/drashtishukla",
                "id": 164759561,
                "login": "drashtishukla",
                "node_id": "U_kgDOCdIICQ",
                "organizations_url": "https://api.github.com/users/drashtishukla/orgs",
                "received_events_url": "https://api.github.com/users/drashtishukla/received_events",
                "repos_url": "https://api.github.com/users/drashtishukla/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/drashtishukla/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/drashtishukla/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/drashtishukla",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/74b7eae80307dcacfe7fcd9bf1bc35ee68029358/comments",
            "commit": {
                "author": {
                    "date": "2025-01-26T15:03:44Z",
                    "email": "drashtishukla2710@gmail.com",
                    "name": "drashtishukla"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-26T15:03:44Z",
                    "email": "drashtishukla2710@gmail.com",
                    "name": "drashtishukla"
                },
                "message": "feat: real new tab redirect",
                "tree": {
                    "sha": "c7f6355f1619ec743c531742dfebd6dc37e9b406",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/c7f6355f1619ec743c531742dfebd6dc37e9b406"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/74b7eae80307dcacfe7fcd9bf1bc35ee68029358",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164759561?v=4",
                "events_url": "https://api.github.com/users/drashtishukla/events{/privacy}",
                "followers_url": "https://api.github.com/users/drashtishukla/followers",
                "following_url": "https://api.github.com/users/drashtishukla/following{/other_user}",
                "gists_url": "https://api.github.com/users/drashtishukla/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/drashtishukla",
                "id": 164759561,
                "login": "drashtishukla",
                "node_id": "U_kgDOCdIICQ",
                "organizations_url": "https://api.github.com/users/drashtishukla/orgs",
                "received_events_url": "https://api.github.com/users/drashtishukla/received_events",
                "repos_url": "https://api.github.com/users/drashtishukla/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/drashtishukla/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/drashtishukla/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/drashtishukla",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/74b7eae80307dcacfe7fcd9bf1bc35ee68029358",
            "node_id": "C_kwDOM8WH19oAKDc0YjdlYWU4MDMwN2RjYWNmZTdmY2Q5YmYxYmMzNWVlNjgwMjkzNTg",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/f5846cf5edd7b7b73694570446c72bf3167e6886",
                    "sha": "f5846cf5edd7b7b73694570446c72bf3167e6886",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f5846cf5edd7b7b73694570446c72bf3167e6886"
                }
            ],
            "sha": "74b7eae80307dcacfe7fcd9bf1bc35ee68029358",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/74b7eae80307dcacfe7fcd9bf1bc35ee68029358"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164759561?v=4",
                "events_url": "https://api.github.com/users/drashtishukla/events{/privacy}",
                "followers_url": "https://api.github.com/users/drashtishukla/followers",
                "following_url": "https://api.github.com/users/drashtishukla/following{/other_user}",
                "gists_url": "https://api.github.com/users/drashtishukla/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/drashtishukla",
                "id": 164759561,
                "login": "drashtishukla",
                "node_id": "U_kgDOCdIICQ",
                "organizations_url": "https://api.github.com/users/drashtishukla/orgs",
                "received_events_url": "https://api.github.com/users/drashtishukla/received_events",
                "repos_url": "https://api.github.com/users/drashtishukla/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/drashtishukla/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/drashtishukla/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/drashtishukla",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f5846cf5edd7b7b73694570446c72bf3167e6886/comments",
            "commit": {
                "author": {
                    "date": "2025-01-26T14:53:00Z",
                    "email": "drashtishukla2710@gmail.com",
                    "name": "drashtishukla"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-26T14:53:00Z",
                    "email": "drashtishukla2710@gmail.com",
                    "name": "drashtishukla"
                },
                "message": "feat: real redirect",
                "tree": {
                    "sha": "fe20b8c6fb50e0ba8c5455c94fb3b92dddd85735",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/fe20b8c6fb50e0ba8c5455c94fb3b92dddd85735"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/f5846cf5edd7b7b73694570446c72bf3167e6886",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164759561?v=4",
                "events_url": "https://api.github.com/users/drashtishukla/events{/privacy}",
                "followers_url": "https://api.github.com/users/drashtishukla/followers",
                "following_url": "https://api.github.com/users/drashtishukla/following{/other_user}",
                "gists_url": "https://api.github.com/users/drashtishukla/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/drashtishukla",
                "id": 164759561,
                "login": "drashtishukla",
                "node_id": "U_kgDOCdIICQ",
                "organizations_url": "https://api.github.com/users/drashtishukla/orgs",
                "received_events_url": "https://api.github.com/users/drashtishukla/received_events",
                "repos_url": "https://api.github.com/users/drashtishukla/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/drashtishukla/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/drashtishukla/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/drashtishukla",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/f5846cf5edd7b7b73694570446c72bf3167e6886",
            "node_id": "C_kwDOM8WH19oAKGY1ODQ2Y2Y1ZWRkN2I3YjczNjk0NTcwNDQ2YzcyYmYzMTY3ZTY4ODY",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/4e01efc79f7577575c881d657348be3d2969d5e5",
                    "sha": "4e01efc79f7577575c881d657348be3d2969d5e5",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4e01efc79f7577575c881d657348be3d2969d5e5"
                }
            ],
            "sha": "f5846cf5edd7b7b73694570446c72bf3167e6886",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f5846cf5edd7b7b73694570446c72bf3167e6886"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/115440133?v=4",
                "events_url": "https://api.github.com/users/tanushgolwala/events{/privacy}",
                "followers_url": "https://api.github.com/users/tanushgolwala/followers",
                "following_url": "https://api.github.com/users/tanushgolwala/following{/other_user}",
                "gists_url": "https://api.github.com/users/tanushgolwala/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/tanushgolwala",
                "id": 115440133,
                "login": "tanushgolwala",
                "node_id": "U_kgDOBuF6BQ",
                "organizations_url": "https://api.github.com/users/tanushgolwala/orgs",
                "received_events_url": "https://api.github.com/users/tanushgolwala/received_events",
                "repos_url": "https://api.github.com/users/tanushgolwala/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/tanushgolwala/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/tanushgolwala/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/tanushgolwala",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/193ad6bc8c819a306becd3403a6df6058bd5095a/comments",
            "commit": {
                "author": {
                    "date": "2025-01-26T14:52:50Z",
                    "email": "115440133+tanushgolwala@users.noreply.github.com",
                    "name": "Tanush Golwala"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-26T14:52:50Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #220 from drashtishukla/main\n\nfeat: real redirect",
                "tree": {
                    "sha": "fe20b8c6fb50e0ba8c5455c94fb3b92dddd85735",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/fe20b8c6fb50e0ba8c5455c94fb3b92dddd85735"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/193ad6bc8c819a306becd3403a6df6058bd5095a",
                "verification": {
                    "payload": "tree fe20b8c6fb50e0ba8c5455c94fb3b92dddd85735\nparent 9dcdb5e50913ae63cfccbb8a61fa1a005abb14fe\nparent f5846cf5edd7b7b73694570446c72bf3167e6886\nauthor Tanush Golwala <115440133+tanushgolwala@users.noreply.github.com> 1737903170 +0530\ncommitter GitHub <noreply@github.com> 1737903170 +0530\n\nMerge pull request #220 from drashtishukla/main\n\nfeat: real redirect",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnlkxCCRC1aQ7uu5UhlAAAGkcQALFcemE5xfCY/mLznE64vI5y\nTHxfMmuOyCYCzalsaRnbGTqdf0YgzsatSeI5bBdo71EGRVTd86QyxrN5+X1VWfJf\nQUv42yVPvXnKU6MgR7bmzZesYyfnoAkMj+XuckLY3o4VDoyzRfbZp9NX3TAgEYWV\nfYmHJZoxJawRcCYE3undwOqTE+biOHEmIeyStxEcrXrLAx2MXgmarYaUsusrcUSo\nQ0ZntzWF7JBisdnt+1gmyhvu0ZGoXZ6YCmqy025oXH3Evbue580OsAPd13dvTuM6\nW29ehm95GmId0JW5l4UAN7uPR7zGDnT2Y6NCPa+1R2BNBFxE82+HWnI4441UIJ8P\n/BTFE/XAGxgyPlBqSSfX0KMSjre3b2Ebv6sUlOU6je5/T3o7a5c+VBTlxFijv4bR\nLVI6OuUsfGp/ltgw993M4BlztTcaAeOuN5BD4MaHLpGGjQqpYsBozl2NBg8p3nTi\ntU1vTSlLYn6QOjUc1GuWQqpsGqJJaMAnC6E0O6GzYme9NvRFrcH9KiXN/3lB/SzO\n0yHfVmFyb0IARSltsrNbKv7nitMrMKqaDy1NM/5X4TsclKVOGju9Xbsv1+RQAgZY\n5A3El5YFXO5HkuduxsF/2CDDhXL7Pcvpw70trqEDJwpgSfbQ1/9IxzxYR6RQu+0/\nQ/dQkUxTm5SpewfuQHJ9\n=3Cyg\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2025-01-26T14:52:53Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/193ad6bc8c819a306becd3403a6df6058bd5095a",
            "node_id": "C_kwDOM8WH19oAKDE5M2FkNmJjOGM4MTlhMzA2YmVjZDM0MDNhNmRmNjA1OGJkNTA5NWE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/9dcdb5e50913ae63cfccbb8a61fa1a005abb14fe",
                    "sha": "9dcdb5e50913ae63cfccbb8a61fa1a005abb14fe",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/9dcdb5e50913ae63cfccbb8a61fa1a005abb14fe"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/f5846cf5edd7b7b73694570446c72bf3167e6886",
                    "sha": "f5846cf5edd7b7b73694570446c72bf3167e6886",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f5846cf5edd7b7b73694570446c72bf3167e6886"
                }
            ],
            "sha": "193ad6bc8c819a306becd3403a6df6058bd5095a",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/193ad6bc8c819a306becd3403a6df6058bd5095a"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/115440133?v=4",
                "events_url": "https://api.github.com/users/tanushgolwala/events{/privacy}",
                "followers_url": "https://api.github.com/users/tanushgolwala/followers",
                "following_url": "https://api.github.com/users/tanushgolwala/following{/other_user}",
                "gists_url": "https://api.github.com/users/tanushgolwala/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/tanushgolwala",
                "id": 115440133,
                "login": "tanushgolwala",
                "node_id": "U_kgDOBuF6BQ",
                "organizations_url": "https://api.github.com/users/tanushgolwala/orgs",
                "received_events_url": "https://api.github.com/users/tanushgolwala/received_events",
                "repos_url": "https://api.github.com/users/tanushgolwala/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/tanushgolwala/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/tanushgolwala/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/tanushgolwala",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/9dcdb5e50913ae63cfccbb8a61fa1a005abb14fe/comments",
            "commit": {
                "author": {
                    "date": "2025-01-26T14:35:59Z",
                    "email": "115440133+tanushgolwala@users.noreply.github.com",
                    "name": "Tanush Golwala"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-26T14:35:59Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #219 from drashtishukla/main\n\nfeat: redirect to VTOP",
                "tree": {
                    "sha": "e9ab02b1961973b1385a9b61ffc9bb6332ae4ee0",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/e9ab02b1961973b1385a9b61ffc9bb6332ae4ee0"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/9dcdb5e50913ae63cfccbb8a61fa1a005abb14fe",
                "verification": {
                    "payload": "tree e9ab02b1961973b1385a9b61ffc9bb6332ae4ee0\nparent c7ca1cf5f42b28125db338371d4488f96c917e33\nparent 4e01efc79f7577575c881d657348be3d2969d5e5\nauthor Tanush Golwala <115440133+tanushgolwala@users.noreply.github.com> 1737902159 +0530\ncommitter GitHub <noreply@github.com> 1737902159 +0530\n\nMerge pull request #219 from drashtishukla/main\n\nfeat: redirect to VTOP",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnlkhPCRC1aQ7uu5UhlAAAwB0QAKzndVsLC3w/+8dl3EBgFzVw\n5hu922XULjzc5s6fXmXtuhyjhOhoN9YvbCbtNOvAEKhhGpGiPcdy8OEwfccwTkUv\nmdHGnBxSXmkXGheRZwxpsj2q72irlxQIbvyfU1ra7eOc4QvHpwthRLjZMVmZWu46\nM6RQ49Qy2nc+TGqidSrc4dXC6tDLtkNhkDD/ftAX5+MaWRArDHzuMELnJQBtqeeg\nZK1/yHn+uhZA7Rpi++cdeLOCEdmZKNzET4OQpaKqaF7t36TztfyrzZG5TNPl68VG\nwm5F6Hge+nobqABWOWVSFmANEuPGI/sBU/4WwNJQUqCfCTvRaixRXM3jX6ApcIIM\nwwAoIsOPjgoLYA3Sdq+PM6zXCSc23+Hi0sDMiTPVOdEGNa5molW3UyXm/Rp7DO21\nFh+oGWR/hc9LfYN0bDsm/54bgppjf+RL1YjeGAiXcdB0oj4LMFjRDWODSyCyQVnk\nz7tJutf50NOof7vlGWnINqZAZ+hdtoOZDEN8ys23y2EcNq+6Y0BrPPUCO/PwPDfG\nhNss9rMVsboFDhaBiF1OgF1Bfj7OD0EcG00j5V8T8yts247GIKU9/H2TBqQVh/it\nDmrCSD1VPQFM70kEKFOxPwZZSyquA/Wa20VCIXWIW4G97m3IviZQz8+fwJ25mqdZ\nedhtL+qC6zQpksWkqM+r\n=t4fX\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2025-01-26T14:36:02Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/9dcdb5e50913ae63cfccbb8a61fa1a005abb14fe",
            "node_id": "C_kwDOM8WH19oAKDlkY2RiNWU1MDkxM2FlNjNjZmNjYmI4YTYxZmExYTAwNWFiYjE0ZmU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c7ca1cf5f42b28125db338371d4488f96c917e33",
                    "sha": "c7ca1cf5f42b28125db338371d4488f96c917e33",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c7ca1cf5f42b28125db338371d4488f96c917e33"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/4e01efc79f7577575c881d657348be3d2969d5e5",
                    "sha": "4e01efc79f7577575c881d657348be3d2969d5e5",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4e01efc79f7577575c881d657348be3d2969d5e5"
                }
            ],
            "sha": "9dcdb5e50913ae63cfccbb8a61fa1a005abb14fe",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/9dcdb5e50913ae63cfccbb8a61fa1a005abb14fe"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164759561?v=4",
                "events_url": "https://api.github.com/users/drashtishukla/events{/privacy}",
                "followers_url": "https://api.github.com/users/drashtishukla/followers",
                "following_url": "https://api.github.com/users/drashtishukla/following{/other_user}",
                "gists_url": "https://api.github.com/users/drashtishukla/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/drashtishukla",
                "id": 164759561,
                "login": "drashtishukla",
                "node_id": "U_kgDOCdIICQ",
                "organizations_url": "https://api.github.com/users/drashtishukla/orgs",
                "received_events_url": "https://api.github.com/users/drashtishukla/received_events",
                "repos_url": "https://api.github.com/users/drashtishukla/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/drashtishukla/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/drashtishukla/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/drashtishukla",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4e01efc79f7577575c881d657348be3d2969d5e5/comments",
            "commit": {
                "author": {
                    "date": "2025-01-26T14:35:31Z",
                    "email": "drashtishukla2710@gmail.com",
                    "name": "drashtishukla"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-26T14:35:31Z",
                    "email": "drashtishukla2710@gmail.com",
                    "name": "drashtishukla"
                },
                "message": "feat: redirect to VTOP",
                "tree": {
                    "sha": "e9ab02b1961973b1385a9b61ffc9bb6332ae4ee0",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/e9ab02b1961973b1385a9b61ffc9bb6332ae4ee0"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/4e01efc79f7577575c881d657348be3d2969d5e5",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164759561?v=4",
                "events_url": "https://api.github.com/users/drashtishukla/events{/privacy}",
                "followers_url": "https://api.github.com/users/drashtishukla/followers",
                "following_url": "https://api.github.com/users/drashtishukla/following{/other_user}",
                "gists_url": "https://api.github.com/users/drashtishukla/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/drashtishukla",
                "id": 164759561,
                "login": "drashtishukla",
                "node_id": "U_kgDOCdIICQ",
                "organizations_url": "https://api.github.com/users/drashtishukla/orgs",
                "received_events_url": "https://api.github.com/users/drashtishukla/received_events",
                "repos_url": "https://api.github.com/users/drashtishukla/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/drashtishukla/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/drashtishukla/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/drashtishukla",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/4e01efc79f7577575c881d657348be3d2969d5e5",
            "node_id": "C_kwDOM8WH19oAKDRlMDFlZmM3OWY3NTc3NTc1Yzg4MWQ2NTczNDhiZTNkMjk2OWQ1ZTU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c7ca1cf5f42b28125db338371d4488f96c917e33",
                    "sha": "c7ca1cf5f42b28125db338371d4488f96c917e33",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c7ca1cf5f42b28125db338371d4488f96c917e33"
                }
            ],
            "sha": "4e01efc79f7577575c881d657348be3d2969d5e5",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4e01efc79f7577575c881d657348be3d2969d5e5"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c7ca1cf5f42b28125db338371d4488f96c917e33/comments",
            "commit": {
                "author": {
                    "date": "2025-01-26T10:40:20Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-26T10:40:20Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #218 from RohitPhaniramSakamuri/main\n\nfeat: Reverse Coding",
                "tree": {
                    "sha": "75854e71654edc9917272de8ae8aff08d8a93f53",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/75854e71654edc9917272de8ae8aff08d8a93f53"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/c7ca1cf5f42b28125db338371d4488f96c917e33",
                "verification": {
                    "payload": "tree 75854e71654edc9917272de8ae8aff08d8a93f53\nparent c572d0e05f03beacf83bef6b146bf3538f75da53\nparent 60086df554e17ea1407972632ec39ec5adbad6d0\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1737888020 +0530\ncommitter GitHub <noreply@github.com> 1737888020 +0530\n\nMerge pull request #218 from RohitPhaniramSakamuri/main\n\nfeat: Reverse Coding",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnlhEUCRC1aQ7uu5UhlAAAHdsQAIFzPp6WybxmiA9WNZIey+JD\nP8TLvFkgtQhX7jIRxoeb6SF+i6+m6wh4IBp9fcJ2GsV3vfjl9tMzIOBiZ4WeuOzf\nhnrcph/MQ+N/ulxQlCoqte40xAVK8VBHHbv4fLLN0CodDxpy6Pz64KtPPFyVxslV\nw5WnSZopT9krlAi/4bJVBvxMAZxT2sbw7TmujHS4+XqJMFJtktT1D0XZ/bmuwHdH\nLvAM7/9naJScwn93wTPAHTnTRe/MjJHNY93WufUb/X8Hag3OasyypffiWyikDfLy\nINLdNEETv/jIkxiR0HSCf6Ed2iJZUjkjoO5Rbo1Cq9+r31rt/6nOrUS58Es1CEZW\nexc1PZVf655msV22dKicNCwM0wd4HYOqSLobJRvcXmnx6lgMpvGXMqJACpVblS4T\nsuebewfDhF7tdLe7t1cQzI7g/DAiHTMpiIytfluAS70oNLUDDuWpMS6ErcMn7S5v\nhZOPuKqdaIlqlYjJmXWOQSImF0PcHbhnFCtvPAWx0lhVbyK/p4eZ1LWAD7nY/RQu\nOJqB1ymU1QAhJYXOkn5rEUeNOYGpd5VNmc2TK+8lh9o9acDoFuhcOSwpm2UUsV6M\n//Ep+n3LVHxFvszeM7dwYX34go/ij+5j9/vYBoJ9VuUfve2XEYFrD2E/QkfNov23\nlIX6/4/GSpJ//6t2eGJ5\n=AAlc\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2025-01-26T10:40:22Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/c7ca1cf5f42b28125db338371d4488f96c917e33",
            "node_id": "C_kwDOM8WH19oAKGM3Y2ExY2Y1ZjQyYjI4MTI1ZGIzMzgzNzFkNDQ4OGY5NmM5MTdlMzM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c572d0e05f03beacf83bef6b146bf3538f75da53",
                    "sha": "c572d0e05f03beacf83bef6b146bf3538f75da53",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c572d0e05f03beacf83bef6b146bf3538f75da53"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/60086df554e17ea1407972632ec39ec5adbad6d0",
                    "sha": "60086df554e17ea1407972632ec39ec5adbad6d0",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/60086df554e17ea1407972632ec39ec5adbad6d0"
                }
            ],
            "sha": "c7ca1cf5f42b28125db338371d4488f96c917e33",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c7ca1cf5f42b28125db338371d4488f96c917e33"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/60086df554e17ea1407972632ec39ec5adbad6d0/comments",
            "commit": {
                "author": {
                    "date": "2025-01-26T10:35:16Z",
                    "email": "148008559+RohitPhaniramSakamuri@users.noreply.github.com",
                    "name": "Rohit Phaniram Sakamuri"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-26T10:35:16Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge branch 'ACM-VIT:main' into main",
                "tree": {
                    "sha": "75854e71654edc9917272de8ae8aff08d8a93f53",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/75854e71654edc9917272de8ae8aff08d8a93f53"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/60086df554e17ea1407972632ec39ec5adbad6d0",
                "verification": {
                    "payload": "tree 75854e71654edc9917272de8ae8aff08d8a93f53\nparent 65b315d28f0b37115c8d899d2cff58195a6b2bec\nparent c572d0e05f03beacf83bef6b146bf3538f75da53\nauthor Rohit Phaniram Sakamuri <148008559+RohitPhaniramSakamuri@users.noreply.github.com> 1737887716 +0530\ncommitter GitHub <noreply@github.com> 1737887716 +0530\n\nMerge branch 'ACM-VIT:main' into main\n",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnlg/kCRC1aQ7uu5UhlAAAkpkQAHyl7uMa2pCpvyCyHWRXP9i7\n07C0jPami8B91hVFC1VxNKQv/7UMELpkrwSIy0HS/3vDFalqxExlXcUX2WtKPrLg\nAKwk7SeXygW3U9/eIh/Cww/7EQauKjvznP+I3a1IMRuXvI22x5yw7/DnkHBsT3Yu\nlzH1G/GnBr4ehu3e7fT9CEmzuq6LvGfKrGqHcdknuQrjFzFh5a9TCIQgDSoopCcI\n7UsqgZoSadod3sZZawCaT3VUPvJL2YdWWIXGZkkpjHpuS20+Omi6pPmkm92OIkh4\nCE6rLRp2w4e5W+xPZ6tLMDRYQ0aMe60U73kCp70UF8r/g5PXENjfZBGXItdcS0q1\nfcad9DnEnf2Th3qv1ggBYRbIMQ/bMWHSafuU+DK5k5+X8UhxGX9620DdulBaAQe8\nVJTjaMHktnZ9aSHwofRweDJCjtA3QoNp6oCozttKqkDQDju338Y9fpyR1Dsl9xKc\nXY3rtKXGqMvb4mx1pAlpITSWUKBQT+dVrENQFpQnhLOKPWZIk6PG3osKwd/yz639\na7LOSb8Q4U8jInUkDAn0sdVlOKJu7lsMl11/FtxHQsY/PyWW71mxqctZEEoFK5Mb\nFCgNiciQNOsiHN0x3tw60N6pZT6cKZ8PlODphYwQPUaZZEpl+weTzKPt/UrrAOht\nvnkHq2gzMy3rSWwYy9vP\n=ODph\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2025-01-26T10:35:29Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/60086df554e17ea1407972632ec39ec5adbad6d0",
            "node_id": "C_kwDOM8WH19oAKDYwMDg2ZGY1NTRlMTdlYTE0MDc5NzI2MzJlYzM5ZWM1YWRiYWQ2ZDA",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/65b315d28f0b37115c8d899d2cff58195a6b2bec",
                    "sha": "65b315d28f0b37115c8d899d2cff58195a6b2bec",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/65b315d28f0b37115c8d899d2cff58195a6b2bec"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c572d0e05f03beacf83bef6b146bf3538f75da53",
                    "sha": "c572d0e05f03beacf83bef6b146bf3538f75da53",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c572d0e05f03beacf83bef6b146bf3538f75da53"
                }
            ],
            "sha": "60086df554e17ea1407972632ec39ec5adbad6d0",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/60086df554e17ea1407972632ec39ec5adbad6d0"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/65b315d28f0b37115c8d899d2cff58195a6b2bec/comments",
            "commit": {
                "author": {
                    "date": "2025-01-26T10:31:06Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2025-01-26T10:31:06Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "message": "feat: Reverse Coding",
                "tree": {
                    "sha": "9907e7bb90731f7a91085065c512a7dd0ef1c76c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/9907e7bb90731f7a91085065c512a7dd0ef1c76c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/65b315d28f0b37115c8d899d2cff58195a6b2bec",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/65b315d28f0b37115c8d899d2cff58195a6b2bec",
            "node_id": "C_kwDOM8WH19oAKDY1YjMxNWQyOGYwYjM3MTE1YzhkODk5ZDJjZmY1ODE5NWE2YjJiZWM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/cfb029c9a172cbff40b7bbca9de44924ff1ec721",
                    "sha": "cfb029c9a172cbff40b7bbca9de44924ff1ec721",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/cfb029c9a172cbff40b7bbca9de44924ff1ec721"
                }
            ],
            "sha": "65b315d28f0b37115c8d899d2cff58195a6b2bec",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/65b315d28f0b37115c8d899d2cff58195a6b2bec"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/85606266?v=4",
                "events_url": "https://api.github.com/users/kairavsheth/events{/privacy}",
                "followers_url": "https://api.github.com/users/kairavsheth/followers",
                "following_url": "https://api.github.com/users/kairavsheth/following{/other_user}",
                "gists_url": "https://api.github.com/users/kairavsheth/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/kairavsheth",
                "id": 85606266,
                "login": "kairavsheth",
                "node_id": "MDQ6VXNlcjg1NjA2MjY2",
                "organizations_url": "https://api.github.com/users/kairavsheth/orgs",
                "received_events_url": "https://api.github.com/users/kairavsheth/received_events",
                "repos_url": "https://api.github.com/users/kairavsheth/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/kairavsheth/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/kairavsheth/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/kairavsheth",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c572d0e05f03beacf83bef6b146bf3538f75da53/comments",
            "commit": {
                "author": {
                    "date": "2024-11-23T07:22:00Z",
                    "email": "85606266+kairavsheth@users.noreply.github.com",
                    "name": "Kairav Nitin Sheth"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-23T07:22:00Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #215 from mahendra785/main\n\nfix : todo and landing page ui fix\r\n\r\nmerged after approval from @Supratim69",
                "tree": {
                    "sha": "98e54e58ff1411896bef2ef36b71fdd1e29e85c0",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/98e54e58ff1411896bef2ef36b71fdd1e29e85c0"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/c572d0e05f03beacf83bef6b146bf3538f75da53",
                "verification": {
                    "payload": "tree 98e54e58ff1411896bef2ef36b71fdd1e29e85c0\nparent a9b98504b9c69cf89670e2fd46a01bd407db9ccb\nparent d4463e16c2e5ff0b75a361b8c32a0c9f3349415a\nauthor Kairav Nitin Sheth <85606266+kairavsheth@users.noreply.github.com> 1732346520 +0530\ncommitter GitHub <noreply@github.com> 1732346520 +0530\n\nMerge pull request #215 from mahendra785/main\n\nfix : todo and landing page ui fix\r\n\r\nmerged after approval from @Supratim69 ",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnQYKYCRC1aQ7uu5UhlAAArIEQACutzWooNoKxRG+OLMYeu0xY\nBNWT/RhMCzcooKI1o5BdOuxf63RhSPo1qO7eEEqKtFg1slTisSHUYOiX39Ei0EJd\ndMG7oG1bcj/3kjFzOdCy1GJm8FQMQiHCXoR337NX5KK7PwlLS+9rNzo1hxabfUbe\nviE9CY96fm+NwDIJULgflDLF+5wP7GD4rXNuyAWFHo9EFopaouZyISQfOWHHdK/O\nnXNCuK8i0o3UDwB0CvHB/5rgVx/qmKhKqjxNBuUw94vq4pw5VdKlgSUBaxgtJZj5\nnHkI5G+h4KxVac35EbBQECl3pKyyluGwSZ0sA+t6xphKTSwT0xq4tcWM6kXZs/tF\nLjnJLw01wC1rtyL3AirTBJSpKfMAYq9vbCV/nEkbJULZ/bm67AtjKO7vCWZaIgmU\nHYkFk0bDsNMnFx+hstQjRXsrrw1fxKlavWRDzQxYy2CM14Jsck2naayLlH/t2DL6\nRIzwC7+f1K4bQpAjk53Hl+JHSrvCJl4Fr/kS4ZpqfPvCwzP3dp14nMCOrZGqTpp0\nVBj6VY3ONWZ3UocalnTDg32AJO/KVKhREk0ODDO/HIl2KmDVj4NpjyAsxXFDUt0t\nliYK+riWvZ17cBx14ffb6Wsn+YT5Es62LO6ZuAtzL0w96lEqidISnfHlWlwhbmjc\n1lhWKsYz1yMqQyyma/WT\n=CLVR\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-23T07:22:02Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/c572d0e05f03beacf83bef6b146bf3538f75da53",
            "node_id": "C_kwDOM8WH19oAKGM1NzJkMGUwNWYwM2JlYWNmODNiZWY2YjE0NmJmMzUzOGY3NWRhNTM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/a9b98504b9c69cf89670e2fd46a01bd407db9ccb",
                    "sha": "a9b98504b9c69cf89670e2fd46a01bd407db9ccb",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a9b98504b9c69cf89670e2fd46a01bd407db9ccb"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d4463e16c2e5ff0b75a361b8c32a0c9f3349415a",
                    "sha": "d4463e16c2e5ff0b75a361b8c32a0c9f3349415a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d4463e16c2e5ff0b75a361b8c32a0c9f3349415a"
                }
            ],
            "sha": "c572d0e05f03beacf83bef6b146bf3538f75da53",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c572d0e05f03beacf83bef6b146bf3538f75da53"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d4463e16c2e5ff0b75a361b8c32a0c9f3349415a/comments",
            "commit": {
                "author": {
                    "date": "2024-11-23T05:23:48Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-23T05:23:48Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "fix : todo and landing page ui fix",
                "tree": {
                    "sha": "98e54e58ff1411896bef2ef36b71fdd1e29e85c0",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/98e54e58ff1411896bef2ef36b71fdd1e29e85c0"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/d4463e16c2e5ff0b75a361b8c32a0c9f3349415a",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/d4463e16c2e5ff0b75a361b8c32a0c9f3349415a",
            "node_id": "C_kwDOM8WH19oAKGQ0NDYzZTE2YzJlNWZmMGI3NWEzNjFiOGMzMmEwYzlmMzM0OTQxNWE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/a9b98504b9c69cf89670e2fd46a01bd407db9ccb",
                    "sha": "a9b98504b9c69cf89670e2fd46a01bd407db9ccb",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a9b98504b9c69cf89670e2fd46a01bd407db9ccb"
                }
            ],
            "sha": "d4463e16c2e5ff0b75a361b8c32a0c9f3349415a",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d4463e16c2e5ff0b75a361b8c32a0c9f3349415a"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a9b98504b9c69cf89670e2fd46a01bd407db9ccb/comments",
            "commit": {
                "author": {
                    "date": "2024-11-05T13:18:39Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-05T13:18:39Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #214 from Alan-J-Bibins/main\n\nfeat: Added a Retry Quiz button to redo the quiz with the same config",
                "tree": {
                    "sha": "634518f340a26006463bcbd7a57b818915b7d014",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/634518f340a26006463bcbd7a57b818915b7d014"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/a9b98504b9c69cf89670e2fd46a01bd407db9ccb",
                "verification": {
                    "payload": "tree 634518f340a26006463bcbd7a57b818915b7d014\nparent 4f46fbf2e0fdadf447f2ceea83bd7fd78daf963b\nparent c428b0536fd2f760b45f4ff7e32437f69b5d9b2d\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730812719 +0530\ncommitter GitHub <noreply@github.com> 1730812719 +0530\n\nMerge pull request #214 from Alan-J-Bibins/main\n\nfeat: Added a Retry Quiz button to redo the quiz with the same config",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnKhsvCRC1aQ7uu5UhlAAAWr8QABo5SorkGTe21M2cQ3M1kZP+\nmH6aQ8KN0fotq9czWQh4/Sbqq+Jy1G2KfmYgvqGRYEZn+w74gYXTylpHwtV+6iUD\nqjICTpUdaaovlL+ke8w0mbd0SUtgslfpyZ3HBr5kigLOZXs4a5eeb8a3RoCtsJaL\ns9+hFXwscIJUgmKL8KO6XjDJ24YyXTUdTMKc4ZpMDmM416QahLQUDBRTlWEGruC4\nNW4tIolzeZZZKIcPEevvYnq846x6axfvHcwU+ufJYbvcy3AQ3fszzYuLeZjHYNYV\nr6qH96Cs0w0xKpa0tKfCA/z14oqBoTQ8Vo3zgMSSNcptlse+TMbUDXo9ZiKBDFqg\n9WPffht0f7KGO0tyomrdysBxWNqya6RLI9g8pRmHVevhVrvsH3z3X4G+HuGVhlFu\nxv0Uf8RVccn1a8GcDnvfS71pWAwSR/ZWwlEatCJVYayqUOiF9U4HJF5+pPtVZDRF\nY7Ejo+R6bRxxupq4LAKe3HtepA3+UZojRRWTGPm5I1QzFgSlurxxFEkfnvYkXC+5\nOtBBj1lm7iL9x5U+30nossDvPf2ebg88w7LiHG8N9nr1EFrQbLMZS5jyuokx7LdZ\nr98v6AaBAaJOfW4tgY0R6eKwVUFX3wyjGu1eISPzMrPTyLEOu2+7PxUd1Yfdkyao\niP/uW/tcBSKzOzICSRAA\n=Slpz\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/a9b98504b9c69cf89670e2fd46a01bd407db9ccb",
            "node_id": "C_kwDOM8WH19oAKGE5Yjk4NTA0YjljNjljZjg5NjcwZTJmZDQ2YTAxYmQ0MDdkYjljY2I",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/4f46fbf2e0fdadf447f2ceea83bd7fd78daf963b",
                    "sha": "4f46fbf2e0fdadf447f2ceea83bd7fd78daf963b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4f46fbf2e0fdadf447f2ceea83bd7fd78daf963b"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c428b0536fd2f760b45f4ff7e32437f69b5d9b2d",
                    "sha": "c428b0536fd2f760b45f4ff7e32437f69b5d9b2d",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c428b0536fd2f760b45f4ff7e32437f69b5d9b2d"
                }
            ],
            "sha": "a9b98504b9c69cf89670e2fd46a01bd407db9ccb",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a9b98504b9c69cf89670e2fd46a01bd407db9ccb"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c428b0536fd2f760b45f4ff7e32437f69b5d9b2d/comments",
            "commit": {
                "author": {
                    "date": "2024-11-05T12:56:02Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-05T12:56:02Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "fix: Minor UI changes",
                "tree": {
                    "sha": "634518f340a26006463bcbd7a57b818915b7d014",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/634518f340a26006463bcbd7a57b818915b7d014"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/c428b0536fd2f760b45f4ff7e32437f69b5d9b2d",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/c428b0536fd2f760b45f4ff7e32437f69b5d9b2d",
            "node_id": "C_kwDOM8WH19oAKGM0MjhiMDUzNmZkMmY3NjBiNDVmNGZmN2UzMjQzN2Y2OWI1ZDliMmQ",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/3ee6d33351363d0dd036fa102b08156105482847",
                    "sha": "3ee6d33351363d0dd036fa102b08156105482847",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/3ee6d33351363d0dd036fa102b08156105482847"
                }
            ],
            "sha": "c428b0536fd2f760b45f4ff7e32437f69b5d9b2d",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c428b0536fd2f760b45f4ff7e32437f69b5d9b2d"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/3ee6d33351363d0dd036fa102b08156105482847/comments",
            "commit": {
                "author": {
                    "date": "2024-11-05T12:41:11Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-05T12:41:11Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "feat: Added a Retry Quiz button",
                "tree": {
                    "sha": "7152f18a698d43647c3a0d642a2a641f806da407",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/7152f18a698d43647c3a0d642a2a641f806da407"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/3ee6d33351363d0dd036fa102b08156105482847",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/3ee6d33351363d0dd036fa102b08156105482847",
            "node_id": "C_kwDOM8WH19oAKDNlZTZkMzMzNTEzNjNkMGRkMDM2ZmExMDJiMDgxNTYxMDU0ODI4NDc",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c63ad16b614c41eab6ef573ee8246cfa530cfa27",
                    "sha": "c63ad16b614c41eab6ef573ee8246cfa530cfa27",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c63ad16b614c41eab6ef573ee8246cfa530cfa27"
                }
            ],
            "sha": "3ee6d33351363d0dd036fa102b08156105482847",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/3ee6d33351363d0dd036fa102b08156105482847"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/115440133?v=4",
                "events_url": "https://api.github.com/users/tanushgolwala/events{/privacy}",
                "followers_url": "https://api.github.com/users/tanushgolwala/followers",
                "following_url": "https://api.github.com/users/tanushgolwala/following{/other_user}",
                "gists_url": "https://api.github.com/users/tanushgolwala/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/tanushgolwala",
                "id": 115440133,
                "login": "tanushgolwala",
                "node_id": "U_kgDOBuF6BQ",
                "organizations_url": "https://api.github.com/users/tanushgolwala/orgs",
                "received_events_url": "https://api.github.com/users/tanushgolwala/received_events",
                "repos_url": "https://api.github.com/users/tanushgolwala/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/tanushgolwala/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/tanushgolwala/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/tanushgolwala",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4f46fbf2e0fdadf447f2ceea83bd7fd78daf963b/comments",
            "commit": {
                "author": {
                    "date": "2024-11-04T16:24:16Z",
                    "email": "115440133+tanushgolwala@users.noreply.github.com",
                    "name": "Tanush Golwala"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-04T16:24:16Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #213 from Alan-J-Bibins/main\n\nfix: Corrected the answer to a question plus UI fix for quiz modal",
                "tree": {
                    "sha": "7e70e257d339a3591cbd332b004fc522f82a120e",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/7e70e257d339a3591cbd332b004fc522f82a120e"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/4f46fbf2e0fdadf447f2ceea83bd7fd78daf963b",
                "verification": {
                    "payload": "tree 7e70e257d339a3591cbd332b004fc522f82a120e\nparent 255beda6357e8a174db1f9dbf150d07ce05daa81\nparent c63ad16b614c41eab6ef573ee8246cfa530cfa27\nauthor Tanush Golwala <115440133+tanushgolwala@users.noreply.github.com> 1730737456 +0530\ncommitter GitHub <noreply@github.com> 1730737456 +0530\n\nMerge pull request #213 from Alan-J-Bibins/main\n\nfix: Corrected the answer to a question plus UI fix for quiz modal",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnKPUwCRC1aQ7uu5UhlAAAk+wQAJs310D+y/wE6p18XxL38KRO\nQookSBkziMW+kzEcmU2d533vf9kuG1bHtO/jJrr/yGzm+pH/64k987/yZw7U0Rqh\najdnAJ4TiilAgNZo9OSUG0Jpg2exEDyvSCLNcfTwmTPA/KJrXGvkpyxXNWFJ4AnP\nhzgo7xva5iS+8Y6nffShEeHjTm0F3cfSNwnrAYIooHWcE1cju04SuRlB8GIsxZC1\nNbIfBwtiYpuY0WMZV+PYbmYUsi/9VOl1m8HWrOXIO5gRYL7ox8ofaeX+x7FaW1ZS\nyvT6HiE38XiOhEhD5L9FQ8LK4UwoIs8TaHzVg29Miy6f2OqDqxo13vdf/ze3o1Gp\nWO41v5RAyUMTZugEzD/rhKkaly03yZ9GO8J/V8/a0vTsr4X6SrjjHGiPKnaHMMP6\ndRPV7AI+JimygFG3yWtSV3vc0aGfHDX8jyvmDNrqKv7HFYFubDXjRX/gR0NaX47g\n4WbmzJEKkNqqqIKyLvrVgOoFKch+LBd97b/FpO672bCGzICcsTsqVOtzjoG8So4b\ni8iYhWL2nxMe9DXTpNHXwL6IfRwnQStX0jfZSij19w3Vzdb+MCmDszHIbe6opd40\nfXwMKbTUKqbtbUuL/eJeI77NGxSbjMCs9C8BkmqHaBSqrLNYyJCfCX74RdIw0Aqv\njQhwTIKMPCy/+shxlHua\n=8uMe\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-16T09:21:45Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/4f46fbf2e0fdadf447f2ceea83bd7fd78daf963b",
            "node_id": "C_kwDOM8WH19oAKDRmNDZmYmYyZTBmZGFkZjQ0N2YyY2VlYTgzYmQ3ZmQ3OGRhZjk2M2I",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/255beda6357e8a174db1f9dbf150d07ce05daa81",
                    "sha": "255beda6357e8a174db1f9dbf150d07ce05daa81",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/255beda6357e8a174db1f9dbf150d07ce05daa81"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c63ad16b614c41eab6ef573ee8246cfa530cfa27",
                    "sha": "c63ad16b614c41eab6ef573ee8246cfa530cfa27",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c63ad16b614c41eab6ef573ee8246cfa530cfa27"
                }
            ],
            "sha": "4f46fbf2e0fdadf447f2ceea83bd7fd78daf963b",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4f46fbf2e0fdadf447f2ceea83bd7fd78daf963b"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c63ad16b614c41eab6ef573ee8246cfa530cfa27/comments",
            "commit": {
                "author": {
                    "date": "2024-11-04T16:20:44Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-04T16:20:44Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "fix: Overflow hidden for dropdown in quiz modal, also made minor ui changes",
                "tree": {
                    "sha": "7e70e257d339a3591cbd332b004fc522f82a120e",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/7e70e257d339a3591cbd332b004fc522f82a120e"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/c63ad16b614c41eab6ef573ee8246cfa530cfa27",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/c63ad16b614c41eab6ef573ee8246cfa530cfa27",
            "node_id": "C_kwDOM8WH19oAKGM2M2FkMTZiNjE0YzQxZWFiNmVmNTczZWU4MjQ2Y2ZhNTMwY2ZhMjc",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/90dba7b97eeef31e3d2594ff128ea93944185965",
                    "sha": "90dba7b97eeef31e3d2594ff128ea93944185965",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/90dba7b97eeef31e3d2594ff128ea93944185965"
                }
            ],
            "sha": "c63ad16b614c41eab6ef573ee8246cfa530cfa27",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c63ad16b614c41eab6ef573ee8246cfa530cfa27"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/90dba7b97eeef31e3d2594ff128ea93944185965/comments",
            "commit": {
                "author": {
                    "date": "2024-11-04T15:46:52Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-04T15:46:52Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "fix: Incorrect answer has been terminated",
                "tree": {
                    "sha": "f60e4a47f40c27add03364b85a9987e92b122db2",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/f60e4a47f40c27add03364b85a9987e92b122db2"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/90dba7b97eeef31e3d2594ff128ea93944185965",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/90dba7b97eeef31e3d2594ff128ea93944185965",
            "node_id": "C_kwDOM8WH19oAKDkwZGJhN2I5N2VlZWYzMWUzZDI1OTRmZjEyOGVhOTM5NDQxODU5NjU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/255beda6357e8a174db1f9dbf150d07ce05daa81",
                    "sha": "255beda6357e8a174db1f9dbf150d07ce05daa81",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/255beda6357e8a174db1f9dbf150d07ce05daa81"
                }
            ],
            "sha": "90dba7b97eeef31e3d2594ff128ea93944185965",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/90dba7b97eeef31e3d2594ff128ea93944185965"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/255beda6357e8a174db1f9dbf150d07ce05daa81/comments",
            "commit": {
                "author": {
                    "date": "2024-11-02T18:49:17Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-02T18:49:17Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #211 from RohitPhaniramSakamuri/main\n\nquiz feature fixes",
                "tree": {
                    "sha": "33cd4e60c7a4623db2c2bc0e732d00a2a6544905",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/33cd4e60c7a4623db2c2bc0e732d00a2a6544905"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/255beda6357e8a174db1f9dbf150d07ce05daa81",
                "verification": {
                    "payload": "tree 33cd4e60c7a4623db2c2bc0e732d00a2a6544905\nparent 1cc82cf878e48387256c3c713b19246d04ddd39b\nparent cfb029c9a172cbff40b7bbca9de44924ff1ec721\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730573357 +0530\ncommitter GitHub <noreply@github.com> 1730573357 +0530\n\nMerge pull request #211 from RohitPhaniramSakamuri/main\n\nquiz feature fixes",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnJnQtCRC1aQ7uu5UhlAAAz60QAFjaHeDpjzLWbSJFs/WMvzNV\ngBSdC0dU6Nldz1Tyhb9WBJJUp4Xq8oOS6iIgqxb05GlXS0bQJ9Pez5NjhiwR8YlM\nNgBcD2gwREj9emo6Wr5aAjatbcdjrXNmoldjYu7f4IHFkrK9lN4xKy5MAcxblHvD\noEjof6TOS/blizhBPL0I3awmjCHwu9YSqB28phU0C0dgu7eBE7iyWe/DrILOCrn/\nOoKj/WZvnxGY9DLQH1t+FgZ94ivln4KInBIZijjeA2V2iRZPP4w3ppRWjgGXFt3k\nCe4lSVJK+zWqU2ift3iNZ8dYkJBtoCirSQe+GZuPT5AWmsvxdEJwFxd4eJRkcssT\nBAJgc5b9s3wFdfT/zbBuzVpxQRanpNIdegSnqjaX0hlPSKQTtFhzFXQftUEo07dW\nYXTOqDBdNZT6XjM7kcIu9hTWIhA0xa8Uma+SZOlR8/PqtOZgflxqjDd05hiwhZvM\nPzuJh991w6d05/1HqhKiIqQc9EwPZJKL+1YknEUjvJ/M/wOR2gwY47Y+Ke8HArEs\nNM3KbmOYyklzpsqgVEGYmmw1WEq5rKpndqA4NLJf78dz56FqnhfN8JaePgStTMY8\nCMP7+z9pUcUIOnfG5pLncjiHktMxOmRaoLQKoAoPfSC1LBJXn25lYwnl1aP1t67N\n0w/uN9nOG+dVpi5ERcAN\n=x/7m\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/255beda6357e8a174db1f9dbf150d07ce05daa81",
            "node_id": "C_kwDOM8WH19oAKDI1NWJlZGE2MzU3ZThhMTc0ZGIxZjlkYmYxNTBkMDdjZTA1ZGFhODE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/1cc82cf878e48387256c3c713b19246d04ddd39b",
                    "sha": "1cc82cf878e48387256c3c713b19246d04ddd39b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/1cc82cf878e48387256c3c713b19246d04ddd39b"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/cfb029c9a172cbff40b7bbca9de44924ff1ec721",
                    "sha": "cfb029c9a172cbff40b7bbca9de44924ff1ec721",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/cfb029c9a172cbff40b7bbca9de44924ff1ec721"
                }
            ],
            "sha": "255beda6357e8a174db1f9dbf150d07ce05daa81",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/255beda6357e8a174db1f9dbf150d07ce05daa81"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/cfb029c9a172cbff40b7bbca9de44924ff1ec721/comments",
            "commit": {
                "author": {
                    "date": "2024-11-02T18:41:30Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-02T18:41:30Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "message": "quiz feature fixes",
                "tree": {
                    "sha": "33cd4e60c7a4623db2c2bc0e732d00a2a6544905",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/33cd4e60c7a4623db2c2bc0e732d00a2a6544905"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/cfb029c9a172cbff40b7bbca9de44924ff1ec721",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/cfb029c9a172cbff40b7bbca9de44924ff1ec721",
            "node_id": "C_kwDOM8WH19oAKGNmYjAyOWM5YTE3MmNiZmY0MGI3YmJjYTlkZTQ0OTI0ZmYxZWM3MjE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/1cc82cf878e48387256c3c713b19246d04ddd39b",
                    "sha": "1cc82cf878e48387256c3c713b19246d04ddd39b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/1cc82cf878e48387256c3c713b19246d04ddd39b"
                }
            ],
            "sha": "cfb029c9a172cbff40b7bbca9de44924ff1ec721",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/cfb029c9a172cbff40b7bbca9de44924ff1ec721"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/1cc82cf878e48387256c3c713b19246d04ddd39b/comments",
            "commit": {
                "author": {
                    "date": "2024-11-02T14:18:58Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-02T14:18:58Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #209 from adii2ma/main\n\nfeat: updated quiz",
                "tree": {
                    "sha": "d88b919e554ae9f33aa2d9c2c7b376c0d6981670",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/d88b919e554ae9f33aa2d9c2c7b376c0d6981670"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/1cc82cf878e48387256c3c713b19246d04ddd39b",
                "verification": {
                    "payload": "tree d88b919e554ae9f33aa2d9c2c7b376c0d6981670\nparent fa8cfcd0a90466ae509163a3cc24ec6877b1f801\nparent 53cfda79c4e6e45b87ad4974af8dcbf053e13287\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730557138 +0530\ncommitter GitHub <noreply@github.com> 1730557138 +0530\n\nMerge pull request #209 from adii2ma/main\n\nfeat: updated quiz",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnJjTSCRC1aQ7uu5UhlAAApjgQAG+/cuSe9fRTYYq0yNDAMKSu\nXulj0hYzzuXMRuR7h4ZYzB4D7SDiPOJ63CEzMDa/8uPKH2x3iTPNS2DhwrvKw4ij\n2auV7roNW+jm7lIiQr1/BcGb+KSwvC7eLwt9IFDgJDV0OIp3Rt5mdZjFMOoaVCiF\nY9CCf5TiERqh5dVSCLzI/o1Z4ybkKyqiUhLuN2Lrp1FDjOTrW4Ij47Srvc4mxArN\na9fRdINMm6psNKTyDAdQn0SYucWMLNDEOBy29eWHrcrL7KDYPTJA9G+aeL49pqLJ\nU9Ew7wqJBGrLGsFtbHlR0QUBTRD7CSmpBPwRPr6qQ2qgOrl7dQ8xWexxxwxxRC4R\nxsLs6t2S6H73CzUkAIe32y5xszkmmHR8QdyxSgPZ4z4ZWxVk07vnMrEvvCCk04LS\nJbxmf+nw89PKWUhHxVM0JD5VYuIV2ibTIKIkYzybIc15l3rxnHInB4/g0I/0cJim\n8Pt2d0C9exBoM1QEYTYKQVFq38xoQyp1Sh4CcMhh2bFUwggpobiohA8VQ2J27LCX\nCj5q1gF9FdycyBQjIwMxxQzFsyCMxHp0UEPw+/03RsxSuGHLL6L9E9KzFNLVyK+3\n0BEEwQEkGxtUYurKXecyUHGiqt5R3kui3xl89B07i0VNeo9XQOyv/oJ7SMW3QttN\nVbmUJGM0c72P6scTa93r\n=jMld\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/1cc82cf878e48387256c3c713b19246d04ddd39b",
            "node_id": "C_kwDOM8WH19oAKDFjYzgyY2Y4NzhlNDgzODcyNTZjM2M3MTNiMTkyNDZkMDRkZGQzOWI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/fa8cfcd0a90466ae509163a3cc24ec6877b1f801",
                    "sha": "fa8cfcd0a90466ae509163a3cc24ec6877b1f801",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fa8cfcd0a90466ae509163a3cc24ec6877b1f801"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/53cfda79c4e6e45b87ad4974af8dcbf053e13287",
                    "sha": "53cfda79c4e6e45b87ad4974af8dcbf053e13287",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/53cfda79c4e6e45b87ad4974af8dcbf053e13287"
                }
            ],
            "sha": "1cc82cf878e48387256c3c713b19246d04ddd39b",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/1cc82cf878e48387256c3c713b19246d04ddd39b"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/53cfda79c4e6e45b87ad4974af8dcbf053e13287/comments",
            "commit": {
                "author": {
                    "date": "2024-11-02T14:11:48Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-02T14:11:48Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "message": "fixed json",
                "tree": {
                    "sha": "d88b919e554ae9f33aa2d9c2c7b376c0d6981670",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/d88b919e554ae9f33aa2d9c2c7b376c0d6981670"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/53cfda79c4e6e45b87ad4974af8dcbf053e13287",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/53cfda79c4e6e45b87ad4974af8dcbf053e13287",
            "node_id": "C_kwDOM8WH19oAKDUzY2ZkYTc5YzRlNmU0NWI4N2FkNDk3NGFmOGRjYmYwNTNlMTMyODc",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/b1bafc494a1637b56d9fd4430b8a82cec2bc4099",
                    "sha": "b1bafc494a1637b56d9fd4430b8a82cec2bc4099",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b1bafc494a1637b56d9fd4430b8a82cec2bc4099"
                }
            ],
            "sha": "53cfda79c4e6e45b87ad4974af8dcbf053e13287",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/53cfda79c4e6e45b87ad4974af8dcbf053e13287"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b1bafc494a1637b56d9fd4430b8a82cec2bc4099/comments",
            "commit": {
                "author": {
                    "date": "2024-11-02T13:53:04Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-02T13:53:04Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "message": "fixed issues and jsons",
                "tree": {
                    "sha": "7a139910da31f938167b27ea2b94aed9c0bea530",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/7a139910da31f938167b27ea2b94aed9c0bea530"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/b1bafc494a1637b56d9fd4430b8a82cec2bc4099",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/b1bafc494a1637b56d9fd4430b8a82cec2bc4099",
            "node_id": "C_kwDOM8WH19oAKGIxYmFmYzQ5NGExNjM3YjU2ZDlmZDQ0MzBiOGE4MmNlYzJiYzQwOTk",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/3b61059f0c43d2cd3aaca1d14d14b5a6f6b033c3",
                    "sha": "3b61059f0c43d2cd3aaca1d14d14b5a6f6b033c3",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/3b61059f0c43d2cd3aaca1d14d14b5a6f6b033c3"
                }
            ],
            "sha": "b1bafc494a1637b56d9fd4430b8a82cec2bc4099",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b1bafc494a1637b56d9fd4430b8a82cec2bc4099"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/3b61059f0c43d2cd3aaca1d14d14b5a6f6b033c3/comments",
            "commit": {
                "author": {
                    "date": "2024-11-02T11:20:51Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-02T11:20:51Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "message": "ruko idk",
                "tree": {
                    "sha": "6a0399b05e6f19a722db9a83e8f3a3542c854d44",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/6a0399b05e6f19a722db9a83e8f3a3542c854d44"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/3b61059f0c43d2cd3aaca1d14d14b5a6f6b033c3",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/3b61059f0c43d2cd3aaca1d14d14b5a6f6b033c3",
            "node_id": "C_kwDOM8WH19oAKDNiNjEwNTlmMGM0M2QyY2QzYWFjYTFkMTRkMTRiNWE2ZjZiMDMzYzM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/f0ebfbc5198608a39de7a74079208fc009920b62",
                    "sha": "f0ebfbc5198608a39de7a74079208fc009920b62",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f0ebfbc5198608a39de7a74079208fc009920b62"
                }
            ],
            "sha": "3b61059f0c43d2cd3aaca1d14d14b5a6f6b033c3",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/3b61059f0c43d2cd3aaca1d14d14b5a6f6b033c3"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f0ebfbc5198608a39de7a74079208fc009920b62/comments",
            "commit": {
                "author": {
                    "date": "2024-11-02T10:17:38Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-02T10:17:38Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "message": "corrected code course and course names",
                "tree": {
                    "sha": "7a425941943b0405ccb8b2e557286be4cd0ebe14",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/7a425941943b0405ccb8b2e557286be4cd0ebe14"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/f0ebfbc5198608a39de7a74079208fc009920b62",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/f0ebfbc5198608a39de7a74079208fc009920b62",
            "node_id": "C_kwDOM8WH19oAKGYwZWJmYmM1MTk4NjA4YTM5ZGU3YTc0MDc5MjA4ZmMwMDk5MjBiNjI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/fa8cfcd0a90466ae509163a3cc24ec6877b1f801",
                    "sha": "fa8cfcd0a90466ae509163a3cc24ec6877b1f801",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fa8cfcd0a90466ae509163a3cc24ec6877b1f801"
                }
            ],
            "sha": "f0ebfbc5198608a39de7a74079208fc009920b62",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f0ebfbc5198608a39de7a74079208fc009920b62"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fa8cfcd0a90466ae509163a3cc24ec6877b1f801/comments",
            "commit": {
                "author": {
                    "date": "2024-11-01T20:31:01Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-01T20:31:01Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #208 from ACM-VIT/revert-207-revert-206-dev\n\nRevert \"Revert \"Quiz section\"\" ;-;",
                "tree": {
                    "sha": "07e6330c9dbc8c9363bd28dc8a90f751d110d42c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/07e6330c9dbc8c9363bd28dc8a90f751d110d42c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/fa8cfcd0a90466ae509163a3cc24ec6877b1f801",
                "verification": {
                    "payload": "tree 07e6330c9dbc8c9363bd28dc8a90f751d110d42c\nparent ea85d039635e513213e5a987f4ee8d145d123dd2\nparent fecf992a96fe68e77d249e3a09fb04ac717ed1ef\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730493061 +0530\ncommitter GitHub <noreply@github.com> 1730493061 +0530\n\nMerge pull request #208 from ACM-VIT/revert-207-revert-206-dev\n\nRevert \"Revert \"Quiz section\"\" ;-;",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnJTqFCRC1aQ7uu5UhlAAAgsQQAI1okJUeJdX+HeN7GDpzIME/\nOxfsR45GVjAqLXQRUojJY63P8SeC+K85jWWdhG59qyLh1yT/DT+SMpXVwBSxjOKp\n1293EHgkFjBGrrm7Bd1Ge8nI7ig9Xc/qjxWxIxAz7+aoC44WrBOTAE9CblEqi4ug\nBj2yNHxZo5fyQiVWvbdaoukunf/PexU6rTD2+n8Y8oy7lzEzKqNoOdJvbNAh4F0K\nfh4yQyqLaKXd7Dkcy9dLHDQhVreWrNc/hk48TwexqLRFZsQZLx6fzKp0tblNxhya\ndcQBOefIAsqPq81S5GdQ7iOA5stzVxGDD1OPbYpPJPOcLHdUuM7G/2vlT+75b/3A\nFqFE+CKe/vyxeoOdnj0Njts9fA6TGsrD2gjjRdcQKnO5flm8iIjV2zEHQK5Cmz51\nAjsgu2oqjvHDAKHBYh6Sk4X3KnmNtHRs7PMje87rXKFsl6SQwY+iJjGEo1hn3kpe\nnCzFvEQg9ziac/mmRlJRxlH57TLGFHH3dFjZqQ7OE0klUXi1MYtlCZUxuIEtjXQ4\nkegBcVIa/sUIQyyC73I2WgutEmyWWgWsFkBOeCGUwR7UWRdSKIGzT0Z0ziWERTkm\npuagPtvx0887Trq8KNxyu01X7qPDIZhj4ax4EGSH04H/6vcCO6kYJ0qkcD0OfimJ\nXMLV0Agsul6nNbQW8QsC\n=RRE+\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/fa8cfcd0a90466ae509163a3cc24ec6877b1f801",
            "node_id": "C_kwDOM8WH19oAKGZhOGNmY2QwYTkwNDY2YWU1MDkxNjNhM2NjMjRlYzY4NzdiMWY4MDE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/ea85d039635e513213e5a987f4ee8d145d123dd2",
                    "sha": "ea85d039635e513213e5a987f4ee8d145d123dd2",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ea85d039635e513213e5a987f4ee8d145d123dd2"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/fecf992a96fe68e77d249e3a09fb04ac717ed1ef",
                    "sha": "fecf992a96fe68e77d249e3a09fb04ac717ed1ef",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fecf992a96fe68e77d249e3a09fb04ac717ed1ef"
                }
            ],
            "sha": "fa8cfcd0a90466ae509163a3cc24ec6877b1f801",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fa8cfcd0a90466ae509163a3cc24ec6877b1f801"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fecf992a96fe68e77d249e3a09fb04ac717ed1ef/comments",
            "commit": {
                "author": {
                    "date": "2024-11-01T20:30:15Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-01T20:30:15Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Revert \"Revert \"Quiz section\"\"",
                "tree": {
                    "sha": "07e6330c9dbc8c9363bd28dc8a90f751d110d42c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/07e6330c9dbc8c9363bd28dc8a90f751d110d42c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/fecf992a96fe68e77d249e3a09fb04ac717ed1ef",
                "verification": {
                    "payload": "tree 07e6330c9dbc8c9363bd28dc8a90f751d110d42c\nparent ea85d039635e513213e5a987f4ee8d145d123dd2\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730493015 +0530\ncommitter GitHub <noreply@github.com> 1730493015 +0530\n\nRevert \"Revert \"Quiz section\"\"\n",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnJTpXCRC1aQ7uu5UhlAAApsYQAJ5LnTYWi+Oteojqb89U0SSu\nltl/Z/+a/yg6hMwZW/r5FvtXWqKjgioR4/w+M1N+pLQa8mi1udau+yHzCPuJXZAN\nlSooqjA568/lkmClMtF7LeKCanGIcDIA+FUE/26zAYtiTsEEEdn8L5+IQXjYDu3Z\nFjCySGq7HN6XkAHn/xfs7eG7y1kx+RZM426C+aGz5639Sfj8cpD8CRo2/InSeT83\nN6vNO2G5Ap9i2vICw+mTMzuFWyOHASyGJLtoryNgTv6bY5ShMYe6xVMEvFWd3t5L\ny8g6SUdpLAh2IRtat6rBSdrhSKrqbi4r9mJvaT8Br88uGd/ZvL2Qgi2bR2XlT9Cv\n8w/4U5ueo7pEGVusoSRMnMHb16pxUlJUdgDMqDy8PcyEskQqcvx+ca3Tcwm7QD03\ndUaKtC936nc2Ru3z0RUAfFS9jAXC3uwOiAmbdzvcwE+p64KufVD+VbJ4mZyIQfmq\n2Bsd5NDtHK/9sj5RVpXdork6rzuO/qcCcgMdMW4msOMDdSqD8a4CKTMChsuB71/H\nI/1acOkYIPh0wRsb/Rh2BljVDQoJXKdUc7dzpFv6WzNBvHtL4XbTpRXoFIMtByKJ\n59a83oAb6yKyYWyniyMJFnogUfw4ljQT20tmBXGfblUThQb507QI46Ax5N077hNH\n4VygacA2lOJHyK/cLXHA\n=VYYk\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/fecf992a96fe68e77d249e3a09fb04ac717ed1ef",
            "node_id": "C_kwDOM8WH19oAKGZlY2Y5OTJhOTZmZTY4ZTc3ZDI0OWUzYTA5ZmIwNGFjNzE3ZWQxZWY",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/ea85d039635e513213e5a987f4ee8d145d123dd2",
                    "sha": "ea85d039635e513213e5a987f4ee8d145d123dd2",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ea85d039635e513213e5a987f4ee8d145d123dd2"
                }
            ],
            "sha": "fecf992a96fe68e77d249e3a09fb04ac717ed1ef",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fecf992a96fe68e77d249e3a09fb04ac717ed1ef"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ea85d039635e513213e5a987f4ee8d145d123dd2/comments",
            "commit": {
                "author": {
                    "date": "2024-11-01T20:24:17Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-01T20:24:17Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #207 from ACM-VIT/revert-206-dev\n\nRevert \"Quiz section\"",
                "tree": {
                    "sha": "5c23140c26d0f11fb90700bbec80193c723dd397",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/5c23140c26d0f11fb90700bbec80193c723dd397"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/ea85d039635e513213e5a987f4ee8d145d123dd2",
                "verification": {
                    "payload": "tree 5c23140c26d0f11fb90700bbec80193c723dd397\nparent ec08642afc1abccc67abb49743c07bd96159bc07\nparent 099ab5393e3bf902fd643a0f580371c1f95f7e6d\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730492657 +0530\ncommitter GitHub <noreply@github.com> 1730492657 +0530\n\nMerge pull request #207 from ACM-VIT/revert-206-dev\n\nRevert \"Quiz section\"",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnJTjxCRC1aQ7uu5UhlAAAkt8QADWFvCXNuyS3CkOefueG0dJY\nH6Y3LtXHmCTFBiVbVFXCSblInlTSINuwlAntGu9hUS2uQ4ODm+/dYboyRfWyaSCZ\naC6hn0ptmpUKo1eLSH5V9mr7bZncAKARg3ILyyozsUFmGY60hQHhPH9EuPVBAK1x\nP0Avk39dDUY+gOgZc/oyIsqhecTferR60aULnhF1H2pV43bPDqwCLkt/4jD/cV3m\n7QX+BsncWxI9r6/1Xt+zK03YecL/uyCZbTk90Xl54fOam/pDvqKJROzE07wHEGxn\nbQ2i0Z+CI00i7x5Pm3cP+VH89JMBeXx4ytIGVRypElK+PJ7V1KVPSZSkaWjhN0KR\nRPSOMBpfUuFfGYw1ORhP02lRt2hZeXePOP54AqTqMbNjldkIBC+BRgE55GPI4Orw\nuWNZaywdoT17vwrDqzvCWqOi7gikLb+OFzKwxzfcsQmhoNYUKHK5nvgoUnutmpXd\n56wD0duQVs0p3nmCh7cL6QFpl2T7UnRno5thbhJFSQed/XMtqrw+YR/WFuFQEa4o\nsLL0BVZYBDymcRW9r8Rt2a9NjNe6T4xrdfb8L8BNmEb5K+v9qEXHgNzPLGhZIoT+\ntpq/KTDmxKrB3QiIpXadwQN9RxUhM5F1FmA4IpO4MFqGuon/PMFrZ4P37xCdFa61\nG4bkrXAeRp2fns4ww4hk\n=Lfbe\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/ea85d039635e513213e5a987f4ee8d145d123dd2",
            "node_id": "C_kwDOM8WH19oAKGVhODVkMDM5NjM1ZTUxMzIxM2U1YTk4N2Y0ZWU4ZDE0NWQxMjNkZDI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/ec08642afc1abccc67abb49743c07bd96159bc07",
                    "sha": "ec08642afc1abccc67abb49743c07bd96159bc07",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ec08642afc1abccc67abb49743c07bd96159bc07"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/099ab5393e3bf902fd643a0f580371c1f95f7e6d",
                    "sha": "099ab5393e3bf902fd643a0f580371c1f95f7e6d",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/099ab5393e3bf902fd643a0f580371c1f95f7e6d"
                }
            ],
            "sha": "ea85d039635e513213e5a987f4ee8d145d123dd2",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ea85d039635e513213e5a987f4ee8d145d123dd2"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/099ab5393e3bf902fd643a0f580371c1f95f7e6d/comments",
            "commit": {
                "author": {
                    "date": "2024-11-01T20:24:05Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-01T20:24:05Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Revert \"Quiz section\"",
                "tree": {
                    "sha": "5c23140c26d0f11fb90700bbec80193c723dd397",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/5c23140c26d0f11fb90700bbec80193c723dd397"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/099ab5393e3bf902fd643a0f580371c1f95f7e6d",
                "verification": {
                    "payload": "tree 5c23140c26d0f11fb90700bbec80193c723dd397\nparent ec08642afc1abccc67abb49743c07bd96159bc07\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730492645 +0530\ncommitter GitHub <noreply@github.com> 1730492645 +0530\n\nRevert \"Quiz section\"\n",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnJTjlCRC1aQ7uu5UhlAAADo4QAIFPqVcBYZsISHUYx2BFePu4\nW3HDjhlBsB4RdXymTJm2fUF+MAXwMN6c1x7Chgipgg4sXtghiRhb5lAdORGwnw7J\nETx3Qz6iDaRTfusDgaGdUehIwJW3PWYQ2xEB9TNNr5dKDItbPp22gx6MqGvsjbYF\nY9FvA4oR0iUgtsdqnGeKaMXa0wcSRW2XtMGggl4r7hmqGRAhgrqYDa8+HYpZhBdH\nrCKMxQILP6jCF06zCuFlz8rURTfZ4IiJ0imFp2hEiyeF0+7kIP9dZtvqs5g7hm/0\nHlqMwVM9U+tOGgQMegk2WwTkpfUUYZ6EQyT8xXSSdwat226D9FIBPzFzGP//0xpX\n7ybzAIOpB3j0XTh88awKh2hkTuF8chY7f/ATG20w3mP/9ANw21g0k7A7ksxDMq2x\n9uQa8EMOUA7GFfLNIXzrImaaPcAKgS5xrez+lrbg96VMaj1ixAGWs07Zk/bP5az3\nAWP2/YccOIAFZQbudv/3DFgKAZxryMerB6TWGobFwXu2vzc/g+geFIkOBr2lHu48\n9sruzx9KxNyIu77LDRzdEi+N43ydSK+KpkcT1JjkCiUyDQtFWG5GbXia/3MiqDat\nwzyEt7w5TLnI6JZgmIS+xXnM51uyhmZcz/rhiEsWhXKwNyJ2KME9lXPra9Kg/JfY\n/PNtiL1nYDoc/SrQKaoc\n=CTM8\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/099ab5393e3bf902fd643a0f580371c1f95f7e6d",
            "node_id": "C_kwDOM8WH19oAKDA5OWFiNTM5M2UzYmY5MDJmZDY0M2EwZjU4MDM3MWMxZjk1ZjdlNmQ",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/ec08642afc1abccc67abb49743c07bd96159bc07",
                    "sha": "ec08642afc1abccc67abb49743c07bd96159bc07",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ec08642afc1abccc67abb49743c07bd96159bc07"
                }
            ],
            "sha": "099ab5393e3bf902fd643a0f580371c1f95f7e6d",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/099ab5393e3bf902fd643a0f580371c1f95f7e6d"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ec08642afc1abccc67abb49743c07bd96159bc07/comments",
            "commit": {
                "author": {
                    "date": "2024-11-01T20:17:54Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-01T20:17:54Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #206 from ACM-VIT/dev\n\nQuiz section",
                "tree": {
                    "sha": "07e6330c9dbc8c9363bd28dc8a90f751d110d42c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/07e6330c9dbc8c9363bd28dc8a90f751d110d42c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/ec08642afc1abccc67abb49743c07bd96159bc07",
                "verification": {
                    "payload": "tree 07e6330c9dbc8c9363bd28dc8a90f751d110d42c\nparent c40c743842a894a4b50b483cf6a5a20cf2f33fc9\nparent 6ee68ba223bef0d085d4ee4176bdafb8670a19c5\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730492274 +0530\ncommitter GitHub <noreply@github.com> 1730492274 +0530\n\nMerge pull request #206 from ACM-VIT/dev\n\nQuiz section",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnJTdyCRC1aQ7uu5UhlAAA/NwQABJf46ACm3NZImZGPkhiNKox\nnRg8KIE/qa569cuf/QhEIYNU2Rl1yqOwaM1QSZDhH+FLbhIOxJWt15S2sqPi1+sZ\nIVefJ2qemwEVKLncysMH+I1nj1jk5/1psWTXhuXuHyhUpiDCsA6scKLdsdyivurK\nwBngr+Q1G7uYYsiKLkWfKeiRxToNYjOCq9kVjAUEdk1TmSOJ4CCSSNTlymxZpr6G\nPhKFuhVWh00qHrIs3IM+1Ljank/1C28Yd1ADSLTo6iqJJFoUSSerhM3H3fKwbUTI\nbdmkzogyFpCIG8QWWkdfSpMa76PWExFy7TiF6X4wPloprrY3cc3cdU4tDmqnZWWK\nlbjTsXxK/TwToRCN6Oz/kIV0cMjlq6dXseJqs/susqXrXRsWjCaDy7kOYp4ZOqIw\nOXYrn+4fu+0pNTvxHy1PzilOYVUEqouIrtZ4C0PD6s5+ZtRIwNjn52IvUv36CT0J\n0csWB2YO0Wx7IFgJqTqJEN1qCCpC0wDWe7+yAh4VZTtQjk9kH04g1XdkSf3upbaF\ndCWWFl8hqpw3MvYmkuNFDy7y1sD58Bf+If+yUFahLQTZRgebtwM6SCMRRQW64VN5\n3i0IQvWnjt8KGsmOIz4kglqZyDC8DomzqS/5DmoKDCbL1tg5uPwcplLZPYX/MLIi\nGYj5uWWll5RIRfBuYmJ8\n=U+zB\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/ec08642afc1abccc67abb49743c07bd96159bc07",
            "node_id": "C_kwDOM8WH19oAKGVjMDg2NDJhZmMxYWJjY2M2N2FiYjQ5NzQzYzA3YmQ5NjE1OWJjMDc",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c40c743842a894a4b50b483cf6a5a20cf2f33fc9",
                    "sha": "c40c743842a894a4b50b483cf6a5a20cf2f33fc9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c40c743842a894a4b50b483cf6a5a20cf2f33fc9"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/6ee68ba223bef0d085d4ee4176bdafb8670a19c5",
                    "sha": "6ee68ba223bef0d085d4ee4176bdafb8670a19c5",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6ee68ba223bef0d085d4ee4176bdafb8670a19c5"
                }
            ],
            "sha": "ec08642afc1abccc67abb49743c07bd96159bc07",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ec08642afc1abccc67abb49743c07bd96159bc07"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6ee68ba223bef0d085d4ee4176bdafb8670a19c5/comments",
            "commit": {
                "author": {
                    "date": "2024-11-01T20:17:06Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-01T20:17:06Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #205 from Supratim69/dev\n\nUpdate layout.tsx",
                "tree": {
                    "sha": "07e6330c9dbc8c9363bd28dc8a90f751d110d42c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/07e6330c9dbc8c9363bd28dc8a90f751d110d42c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/6ee68ba223bef0d085d4ee4176bdafb8670a19c5",
                "verification": {
                    "payload": "tree 07e6330c9dbc8c9363bd28dc8a90f751d110d42c\nparent 87c03f46a2e986bc15e9a90b739d853148381e27\nparent 8cc4c5b88087035168847ffbde43f40124ea41dd\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730492226 +0530\ncommitter GitHub <noreply@github.com> 1730492226 +0530\n\nMerge pull request #205 from Supratim69/dev\n\nUpdate layout.tsx",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnJTdCCRC1aQ7uu5UhlAAApsYQAEgGbD2Q5vY2c42+hdppkHlm\nw9zO4kxttkjCsnzfTMXqJq5Zw1k2F8B/90JqvrrPOBLpDcuHq12uoGzOUWttYCzs\n8WIgz4kJLc3UFoBNHsDiCVrW4Csc3VPfx2lSnIak3Tl4+g/M4T2xgR4xFaJu3VIt\n1bsghIwu3H+VAk3m45LR2VLWM4xp1cXiyQwwR7HbPaAnXxzHuDtQ1peDLFxb5BYC\ngMiY0gtNKWfCDN4xenpUVnKopVBPqKTXBWzF6TJ5dOITNS+mcukYsHWb0Z39QAmm\nEGDZdF//DO15dn9ZfIlwFeqObFpnnkLssrWZXOBKDvCOkqBlotcARF6Rnu4qzV9G\nCGBMlWvilG8/ZMd3iZfztGy8hdoi/bcQv6Hh4IvK+/zzmMOd5assAM0Ojpfndhm4\n245Ww641XbHb5CNVcuWKC5RAzH3/LVSse8KftyrkMUfPj/KUqHdWMlKHD8ri3Jkn\niGsuw6xGQGxVzdP9LOlmM15L/bvS9Dpy0/y+PebIQT6hn1CcZZIubpytMyeXeV7C\nZf20S72noBMzpysBTEVFdD964RO/hDRntW2wqUJFP3j5oxrYNykXZ8icHrDRdrGP\nJuJb8JdSEQSIQFJy5CymnutYBsrjVyoMxx5033R1uGHGrHhfW1g/znnxetlhk2lP\npKS0uCUdqKR0l5s2Lf8U\n=7UDA\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/6ee68ba223bef0d085d4ee4176bdafb8670a19c5",
            "node_id": "C_kwDOM8WH19oAKDZlZTY4YmEyMjNiZWYwZDA4NWQ0ZWU0MTc2YmRhZmI4NjcwYTE5YzU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/87c03f46a2e986bc15e9a90b739d853148381e27",
                    "sha": "87c03f46a2e986bc15e9a90b739d853148381e27",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/87c03f46a2e986bc15e9a90b739d853148381e27"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/8cc4c5b88087035168847ffbde43f40124ea41dd",
                    "sha": "8cc4c5b88087035168847ffbde43f40124ea41dd",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8cc4c5b88087035168847ffbde43f40124ea41dd"
                }
            ],
            "sha": "6ee68ba223bef0d085d4ee4176bdafb8670a19c5",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6ee68ba223bef0d085d4ee4176bdafb8670a19c5"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8cc4c5b88087035168847ffbde43f40124ea41dd/comments",
            "commit": {
                "author": {
                    "date": "2024-11-01T20:16:30Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-01T20:16:30Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Update layout.tsx",
                "tree": {
                    "sha": "07e6330c9dbc8c9363bd28dc8a90f751d110d42c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/07e6330c9dbc8c9363bd28dc8a90f751d110d42c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/8cc4c5b88087035168847ffbde43f40124ea41dd",
                "verification": {
                    "payload": "tree 07e6330c9dbc8c9363bd28dc8a90f751d110d42c\nparent 87c03f46a2e986bc15e9a90b739d853148381e27\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730492190 +0530\ncommitter GitHub <noreply@github.com> 1730492190 +0530\n\nUpdate layout.tsx",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnJTcfCRC1aQ7uu5UhlAAANesQAK9MtDAEiG4TmHQWhQZEOzly\nM7wCWSwi9pz+KFnWFPsBPaeD9xziumq1T/TdraJ3nHgoGytEysWyeEi8b+n4zT8k\nVlqxghVzRWDcbCagk2DNGIqvzqvRBwU4A43rmbjxhey297KAX54ihXmMVAtiPcpR\nPrhOVZ5NLQ778Z2goo3HP6Hq+VVvhDZfXUzvrsEn4FS7rRI2sCA2qvASyyIIqk34\nFo49v8v0rMOD91WTQWbdYG4SD6ajvoIAl0IlWnKpm78pLbIdWNwOqk95WuEBJh0I\nmjRDCeBtsMY19dHZ4atawA1+Xy7IATAm+ERo848IYOPOLgJ7fHscCIR+nryi8f1f\nmQqUoYPgVT1D2s6a7Z2TYyaW3GcTaJuHKTfeQ1D5Rd9GbqCgO11Eyx2zi9MdxiFB\nSV8PBHdgTbSHXZZOPs2GDUJPRRJ31zrRtLPhPoGkpfiGQUz7E7AzsQPW6f9Eq2hg\nQeELJf1h5CNSaYJDlT0Tl+WpzF1XZGx/PaVAyearjWockgwYFR6lorXK50Cacq6S\nsW1zRgHbHmWcsQaVjokxlB/rkikVDOd9VDcXkkjLRMG+ZSf+WBVij+3KpqtK7a8Q\nrq8AGoJfIa6wnvNS5Np1BF3M6Q83+r/4kQFNzhIxo2vS6FNCoQ4YWnoCP/CU048K\n9gjnt1wIJ7SH8JdTK9ZP\n=uisP\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/8cc4c5b88087035168847ffbde43f40124ea41dd",
            "node_id": "C_kwDOM8WH19oAKDhjYzRjNWI4ODA4NzAzNTE2ODg0N2ZmYmRlNDNmNDAxMjRlYTQxZGQ",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/87c03f46a2e986bc15e9a90b739d853148381e27",
                    "sha": "87c03f46a2e986bc15e9a90b739d853148381e27",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/87c03f46a2e986bc15e9a90b739d853148381e27"
                }
            ],
            "sha": "8cc4c5b88087035168847ffbde43f40124ea41dd",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8cc4c5b88087035168847ffbde43f40124ea41dd"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/87c03f46a2e986bc15e9a90b739d853148381e27/comments",
            "commit": {
                "author": {
                    "date": "2024-11-01T20:13:41Z",
                    "email": "supratim7ghose@gmail.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-11-01T20:13:41Z",
                    "email": "supratim7ghose@gmail.com",
                    "name": "Supratim Ghose"
                },
                "message": "blank comitt",
                "tree": {
                    "sha": "94cd4e78c2a5cd9650b462f32c702f7a5860ed18",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/94cd4e78c2a5cd9650b462f32c702f7a5860ed18"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/87c03f46a2e986bc15e9a90b739d853148381e27",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/87c03f46a2e986bc15e9a90b739d853148381e27",
            "node_id": "C_kwDOM8WH19oAKDg3YzAzZjQ2YTJlOTg2YmMxNWU5YTkwYjczOWQ4NTMxNDgzODFlMjc",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/e9946b7a350520da2ce948b8fa1d09516e174ca1",
                    "sha": "e9946b7a350520da2ce948b8fa1d09516e174ca1",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/e9946b7a350520da2ce948b8fa1d09516e174ca1"
                }
            ],
            "sha": "87c03f46a2e986bc15e9a90b739d853148381e27",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/87c03f46a2e986bc15e9a90b739d853148381e27"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/e9946b7a350520da2ce948b8fa1d09516e174ca1/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T16:07:43Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T16:07:43Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #203 from RohitPhaniramSakamuri/dev\n\nNPTEL Quiz Feature",
                "tree": {
                    "sha": "eae72cb4b59a194509f5756fbe36a30f4af9e40c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/eae72cb4b59a194509f5756fbe36a30f4af9e40c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/e9946b7a350520da2ce948b8fa1d09516e174ca1",
                "verification": {
                    "payload": "tree eae72cb4b59a194509f5756fbe36a30f4af9e40c\nparent 055499f1a85d9e6194157e5575435084a1f8db59\nparent f6e68852b327c99ff0951ebc7b060d2cfba73761\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730304463 +0530\ncommitter GitHub <noreply@github.com> 1730304463 +0530\n\nMerge pull request #203 from RohitPhaniramSakamuri/dev\n\nNPTEL Quiz Feature",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnIlnPCRC1aQ7uu5UhlAAA1k8QAA8N6sDVxPE0Y8UOkFOcKP0l\nHtFv6hjoMu23A/1k/Wt24hu/xrHjk7X2h8UXH9soRQZrRn8gL4fhW32V5M25Sq1u\nlcokb6BehtqHuB//DmrDtH9nOuDRh58BeRWBQ7kNafQyjIgZmRRvBNTQoVbMQDDL\nkjgLfclMFkJqqSRbEXsFpgoy+6Bx1lX36Xa9jXPStH6aWjcSPWx4tzrwJ2h/hL4+\nEq+oyP8kEWweg4cEt2b6paWj3HwxTqfd/ePyRkVKC0pSPyFY5jbd0NBJRmbnBLgQ\njQBgythaqU8fL1B2knShCJkTcS0mJg93dcTCf+Qb80gTy8Oz73KgZBccK+4ALAOa\nIJ3bTQRGmUxEb0r9hQP/ACPasmnkDPPrx/RYRk8HWeYHihTpj6RO0ngItb19aK1F\ni9F2/sjEnacHY1LL4RKX9GlR/J+TtsQ60YboYN432ibet+Ov9jm7lRYuRub9+MsU\nKoKPdpYf5S9N2XUtGZKPVHL/4Rz0JQxB1K7BEs6oWLM9PalhbKnllbYq73+tA0H/\n7AbN0CnNz+ng2wGYuu3TS5qJocb98HUVlRT29mdeHgbLgTdq0ZkEhvXV7xbU7Rys\ndtfb2hIaGYrSKcNt1cVTOCITeYsqJAKSlfJEqxhr724DdE9oBRGOYZoNLxVMEa/7\neOx1lHfHaDoK0SFRM5se\n=9Ns4\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/e9946b7a350520da2ce948b8fa1d09516e174ca1",
            "node_id": "C_kwDOM8WH19oAKGU5OTQ2YjdhMzUwNTIwZGEyY2U5NDhiOGZhMWQwOTUxNmUxNzRjYTE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/055499f1a85d9e6194157e5575435084a1f8db59",
                    "sha": "055499f1a85d9e6194157e5575435084a1f8db59",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/055499f1a85d9e6194157e5575435084a1f8db59"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/f6e68852b327c99ff0951ebc7b060d2cfba73761",
                    "sha": "f6e68852b327c99ff0951ebc7b060d2cfba73761",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f6e68852b327c99ff0951ebc7b060d2cfba73761"
                }
            ],
            "sha": "e9946b7a350520da2ce948b8fa1d09516e174ca1",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/e9946b7a350520da2ce948b8fa1d09516e174ca1"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f6e68852b327c99ff0951ebc7b060d2cfba73761/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T14:05:17Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T14:05:17Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "padding",
                "tree": {
                    "sha": "eae72cb4b59a194509f5756fbe36a30f4af9e40c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/eae72cb4b59a194509f5756fbe36a30f4af9e40c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/f6e68852b327c99ff0951ebc7b060d2cfba73761",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/f6e68852b327c99ff0951ebc7b060d2cfba73761",
            "node_id": "C_kwDOM8WH19oAKGY2ZTY4ODUyYjMyN2M5OWZmMDk1MWViYzdiMDYwZDJjZmJhNzM3NjE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/882ad648beb1ca24b01d8e5f07ca4df56c552a08",
                    "sha": "882ad648beb1ca24b01d8e5f07ca4df56c552a08",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/882ad648beb1ca24b01d8e5f07ca4df56c552a08"
                }
            ],
            "sha": "f6e68852b327c99ff0951ebc7b060d2cfba73761",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f6e68852b327c99ff0951ebc7b060d2cfba73761"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/882ad648beb1ca24b01d8e5f07ca4df56c552a08/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T13:57:16Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T13:57:16Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "fix : timer",
                "tree": {
                    "sha": "d0b7dfdf30aa8c228271998af7f9ebb4fc2df358",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/d0b7dfdf30aa8c228271998af7f9ebb4fc2df358"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/882ad648beb1ca24b01d8e5f07ca4df56c552a08",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/882ad648beb1ca24b01d8e5f07ca4df56c552a08",
            "node_id": "C_kwDOM8WH19oAKDg4MmFkNjQ4YmViMWNhMjRiMDFkOGU1ZjA3Y2E0ZGY1NmM1NTJhMDg",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/4c54300db9a4d43bdf15d60535b764b5c4ebcdf2",
                    "sha": "4c54300db9a4d43bdf15d60535b764b5c4ebcdf2",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4c54300db9a4d43bdf15d60535b764b5c4ebcdf2"
                }
            ],
            "sha": "882ad648beb1ca24b01d8e5f07ca4df56c552a08",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/882ad648beb1ca24b01d8e5f07ca4df56c552a08"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4c54300db9a4d43bdf15d60535b764b5c4ebcdf2/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T13:45:22Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T13:45:22Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "fix : final ui changes",
                "tree": {
                    "sha": "2b0d38b67019fdc52d99bb14860663585087d3e0",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/2b0d38b67019fdc52d99bb14860663585087d3e0"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/4c54300db9a4d43bdf15d60535b764b5c4ebcdf2",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/4c54300db9a4d43bdf15d60535b764b5c4ebcdf2",
            "node_id": "C_kwDOM8WH19oAKDRjNTQzMDBkYjlhNGQ0M2JkZjE1ZDYwNTM1Yjc2NGI1YzRlYmNkZjI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/767f67bab4d55de083cda653255f5642a72786e2",
                    "sha": "767f67bab4d55de083cda653255f5642a72786e2",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/767f67bab4d55de083cda653255f5642a72786e2"
                }
            ],
            "sha": "4c54300db9a4d43bdf15d60535b764b5c4ebcdf2",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4c54300db9a4d43bdf15d60535b764b5c4ebcdf2"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/767f67bab4d55de083cda653255f5642a72786e2/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T12:59:06Z",
                    "email": "bibinsjoseph@Bibinss-MacBook-Pro.local",
                    "name": "Bibins Joseph"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T12:59:06Z",
                    "email": "bibinsjoseph@Bibinss-MacBook-Pro.local",
                    "name": "Bibins Joseph"
                },
                "message": "fix: Made necessary color changes",
                "tree": {
                    "sha": "baf2f2464cead499ba17c9f6424b2159aec97947",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/baf2f2464cead499ba17c9f6424b2159aec97947"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/767f67bab4d55de083cda653255f5642a72786e2",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/767f67bab4d55de083cda653255f5642a72786e2",
            "node_id": "C_kwDOM8WH19oAKDc2N2Y2N2JhYjRkNTVkZTA4M2NkYTY1MzI1NWY1NjQyYTcyNzg2ZTI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/0a58098db9936b7f9525c967462b2a36b73eb943",
                    "sha": "0a58098db9936b7f9525c967462b2a36b73eb943",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/0a58098db9936b7f9525c967462b2a36b73eb943"
                }
            ],
            "sha": "767f67bab4d55de083cda653255f5642a72786e2",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/767f67bab4d55de083cda653255f5642a72786e2"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/0a58098db9936b7f9525c967462b2a36b73eb943/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T12:06:19Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T12:06:19Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "fix : ui changes",
                "tree": {
                    "sha": "025ea6c7d907da254e0d2ef7391c9156cff3cfdb",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/025ea6c7d907da254e0d2ef7391c9156cff3cfdb"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/0a58098db9936b7f9525c967462b2a36b73eb943",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/0a58098db9936b7f9525c967462b2a36b73eb943",
            "node_id": "C_kwDOM8WH19oAKDBhNTgwOThkYjk5MzZiN2Y5NTI1Yzk2NzQ2MmIyYTM2YjczZWI5NDM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/abd4ddeb8417d9dee6f7fb8e476c7a0dfbed35f9",
                    "sha": "abd4ddeb8417d9dee6f7fb8e476c7a0dfbed35f9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/abd4ddeb8417d9dee6f7fb8e476c7a0dfbed35f9"
                }
            ],
            "sha": "0a58098db9936b7f9525c967462b2a36b73eb943",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/0a58098db9936b7f9525c967462b2a36b73eb943"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/abd4ddeb8417d9dee6f7fb8e476c7a0dfbed35f9/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T11:24:33Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T11:24:33Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "fix : typescript error",
                "tree": {
                    "sha": "231c4cbe59d2cf9f55880426023407dae33f5fb8",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/231c4cbe59d2cf9f55880426023407dae33f5fb8"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/abd4ddeb8417d9dee6f7fb8e476c7a0dfbed35f9",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/abd4ddeb8417d9dee6f7fb8e476c7a0dfbed35f9",
            "node_id": "C_kwDOM8WH19oAKGFiZDRkZGViODQxN2Q5ZGVlNmY3ZmI4ZTQ3NmM3YTBkZmJlZDM1Zjk",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/36f4346423cbe036818eda8b897dfd222c1b8f5d",
                    "sha": "36f4346423cbe036818eda8b897dfd222c1b8f5d",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/36f4346423cbe036818eda8b897dfd222c1b8f5d"
                }
            ],
            "sha": "abd4ddeb8417d9dee6f7fb8e476c7a0dfbed35f9",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/abd4ddeb8417d9dee6f7fb8e476c7a0dfbed35f9"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/36f4346423cbe036818eda8b897dfd222c1b8f5d/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T08:56:20Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T08:56:20Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "error message",
                "tree": {
                    "sha": "720faccf2a4a238bc3717ba1c2487daabed08c38",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/720faccf2a4a238bc3717ba1c2487daabed08c38"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/36f4346423cbe036818eda8b897dfd222c1b8f5d",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/36f4346423cbe036818eda8b897dfd222c1b8f5d",
            "node_id": "C_kwDOM8WH19oAKDM2ZjQzNDY0MjNjYmUwMzY4MThlZGE4Yjg5N2RmZDIyMmMxYjhmNWQ",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/6cb03e9034c45a992fec8fa4283b54cb2d37b93c",
                    "sha": "6cb03e9034c45a992fec8fa4283b54cb2d37b93c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6cb03e9034c45a992fec8fa4283b54cb2d37b93c"
                }
            ],
            "sha": "36f4346423cbe036818eda8b897dfd222c1b8f5d",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/36f4346423cbe036818eda8b897dfd222c1b8f5d"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6cb03e9034c45a992fec8fa4283b54cb2d37b93c/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T08:50:01Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T08:50:01Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "feat : quiz page",
                "tree": {
                    "sha": "b1704b4ad39563acf86ec6eb1e3fd891574393ff",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/b1704b4ad39563acf86ec6eb1e3fd891574393ff"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/6cb03e9034c45a992fec8fa4283b54cb2d37b93c",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/6cb03e9034c45a992fec8fa4283b54cb2d37b93c",
            "node_id": "C_kwDOM8WH19oAKDZjYjAzZTkwMzRjNDVhOTkyZmVjOGZhNDI4M2I1NGNiMmQzN2I5M2M",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d9946ca9f42bc3dc55b69cffadb0666413a36057",
                    "sha": "d9946ca9f42bc3dc55b69cffadb0666413a36057",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d9946ca9f42bc3dc55b69cffadb0666413a36057"
                }
            ],
            "sha": "6cb03e9034c45a992fec8fa4283b54cb2d37b93c",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6cb03e9034c45a992fec8fa4283b54cb2d37b93c"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d9946ca9f42bc3dc55b69cffadb0666413a36057/comments",
            "commit": {
                "author": {
                    "date": "2024-10-30T08:13:08Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-30T08:13:08Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "feat : quiz page",
                "tree": {
                    "sha": "9d760f7e4c3adf427403edd3f958ca2b357340d6",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/9d760f7e4c3adf427403edd3f958ca2b357340d6"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/d9946ca9f42bc3dc55b69cffadb0666413a36057",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/d9946ca9f42bc3dc55b69cffadb0666413a36057",
            "node_id": "C_kwDOM8WH19oAKGQ5OTQ2Y2E5ZjQyYmMzZGM1NWI2OWNmZmFkYjA2NjY0MTNhMzYwNTc",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/e2a3d257e3385be3de7711d5b1cdde5546724b43",
                    "sha": "e2a3d257e3385be3de7711d5b1cdde5546724b43",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/e2a3d257e3385be3de7711d5b1cdde5546724b43"
                }
            ],
            "sha": "d9946ca9f42bc3dc55b69cffadb0666413a36057",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d9946ca9f42bc3dc55b69cffadb0666413a36057"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/e2a3d257e3385be3de7711d5b1cdde5546724b43/comments",
            "commit": {
                "author": {
                    "date": "2024-10-29T20:09:38Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-29T20:09:38Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "feat : show incorrect",
                "tree": {
                    "sha": "01e4567ea12eb26cef7dd959564915ae8465d3b6",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/01e4567ea12eb26cef7dd959564915ae8465d3b6"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/e2a3d257e3385be3de7711d5b1cdde5546724b43",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/e2a3d257e3385be3de7711d5b1cdde5546724b43",
            "node_id": "C_kwDOM8WH19oAKGUyYTNkMjU3ZTMzODViZTNkZTc3MTFkNWIxY2RkZTU1NDY3MjRiNDM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/614cc7d7ac8c55528dee0b14f42f8fe1e32d88d1",
                    "sha": "614cc7d7ac8c55528dee0b14f42f8fe1e32d88d1",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/614cc7d7ac8c55528dee0b14f42f8fe1e32d88d1"
                }
            ],
            "sha": "e2a3d257e3385be3de7711d5b1cdde5546724b43",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/e2a3d257e3385be3de7711d5b1cdde5546724b43"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/614cc7d7ac8c55528dee0b14f42f8fe1e32d88d1/comments",
            "commit": {
                "author": {
                    "date": "2024-10-29T19:38:51Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-29T19:38:51Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "feat : quiz",
                "tree": {
                    "sha": "573bdcab6916c3d2c8f81b8a3fc74a68c5884b93",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/573bdcab6916c3d2c8f81b8a3fc74a68c5884b93"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/614cc7d7ac8c55528dee0b14f42f8fe1e32d88d1",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/614cc7d7ac8c55528dee0b14f42f8fe1e32d88d1",
            "node_id": "C_kwDOM8WH19oAKDYxNGNjN2Q3YWM4YzU1NTI4ZGVlMGIxNGY0MmY4ZmUxZTMyZDg4ZDE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d9becd213138049222b69b3282e7d2bf0e4bc01b",
                    "sha": "d9becd213138049222b69b3282e7d2bf0e4bc01b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d9becd213138049222b69b3282e7d2bf0e4bc01b"
                }
            ],
            "sha": "614cc7d7ac8c55528dee0b14f42f8fe1e32d88d1",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/614cc7d7ac8c55528dee0b14f42f8fe1e32d88d1"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d9becd213138049222b69b3282e7d2bf0e4bc01b/comments",
            "commit": {
                "author": {
                    "date": "2024-10-29T17:10:35Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-29T17:10:35Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "message": "half cooked",
                "tree": {
                    "sha": "d9c94f4521a2de6d76df42b43ca0aca8eeece8f2",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/d9c94f4521a2de6d76df42b43ca0aca8eeece8f2"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/d9becd213138049222b69b3282e7d2bf0e4bc01b",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/d9becd213138049222b69b3282e7d2bf0e4bc01b",
            "node_id": "C_kwDOM8WH19oAKGQ5YmVjZDIxMzEzODA0OTIyMmI2OWIzMjgyZTdkMmJmMGU0YmMwMWI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/055499f1a85d9e6194157e5575435084a1f8db59",
                    "sha": "055499f1a85d9e6194157e5575435084a1f8db59",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/055499f1a85d9e6194157e5575435084a1f8db59"
                }
            ],
            "sha": "d9becd213138049222b69b3282e7d2bf0e4bc01b",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d9becd213138049222b69b3282e7d2bf0e4bc01b"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/055499f1a85d9e6194157e5575435084a1f8db59/comments",
            "commit": {
                "author": {
                    "date": "2024-10-29T12:16:00Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-29T12:16:00Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #201 from adii2ma/dev\n\npublic/assets: made json of wildlife ecology",
                "tree": {
                    "sha": "608ff81b7c959201bf5df97455d7e59ba7fd2d41",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/608ff81b7c959201bf5df97455d7e59ba7fd2d41"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/055499f1a85d9e6194157e5575435084a1f8db59",
                "verification": {
                    "payload": "tree 608ff81b7c959201bf5df97455d7e59ba7fd2d41\nparent c40c743842a894a4b50b483cf6a5a20cf2f33fc9\nparent 2f663152d2c1f54328d27efce443a9a4d57e06dc\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1730204160 +0530\ncommitter GitHub <noreply@github.com> 1730204160 +0530\n\nMerge pull request #201 from adii2ma/dev\n\npublic/assets: made json of wildlife ecology",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnINIACRC1aQ7uu5UhlAAACiQQACmx0i/LCjWDwSzJIeidcuhz\n75QscFdpRPGm+SO+iE9EWUUR1um3cFlgLPzD0JSaH/1+4qMgyNBsH0zCsfCk0m2R\n3eS7wX+Oh2WWPJdcppmCDH13QPzPCjQZUUM2G9b+WJcHlFhn/c8oI2GYm+29BqdF\n9vt4RA//O2hbxMhHobiTwO/WI/KgPV1rYtS4gNcUKOOjopsvhFC4cStjkltxhUpA\n0SCF4C9zYwqBNa0Zx9CAsQySAASC8X5gZeEbPuOOro/aOT+NW55hX/s41zS4CRbx\ngto8mVDJWqV9g5Yyq7ghMfk++XjI4rwGJGnPNp8N0/PKmt271wJEQ6phNiwsbENX\ntbkUFZpfBu0wetKcS7SrAjkW2C06vfHB+B+tH7NoEsUfEjm2tdsqz8qP6M6juKAD\n4oHcIS8zRoQGL1qV5GnqwsZOG9Hh7H5uokFCDSaN6ig1ADNEK74a0u8qFOUIpqdk\n72n0nzEsagKI6U3cqyvNPQLfnNM4BjjljsAbSfxNeMM7oWI6o8Aoxpj65Lznu5e6\nThdndipai+IpwKLuZtxPfcEi28Hbokg7VqokwUyrsvROn60sNzI9s6Nn8XXbFts7\njE8kg6dgo1Wq8n1R7kEX7nLJmrDjYwFjHfXoDY60OUvJtKrd0LEmWQaMuFjfFpNu\n9vBkfKJO/mto9Lco3WK/\n=WOLt\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/055499f1a85d9e6194157e5575435084a1f8db59",
            "node_id": "C_kwDOM8WH19oAKDA1NTQ5OWYxYTg1ZDllNjE5NDE1N2U1NTc1NDM1MDg0YTFmOGRiNTk",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c40c743842a894a4b50b483cf6a5a20cf2f33fc9",
                    "sha": "c40c743842a894a4b50b483cf6a5a20cf2f33fc9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c40c743842a894a4b50b483cf6a5a20cf2f33fc9"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/2f663152d2c1f54328d27efce443a9a4d57e06dc",
                    "sha": "2f663152d2c1f54328d27efce443a9a4d57e06dc",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/2f663152d2c1f54328d27efce443a9a4d57e06dc"
                }
            ],
            "sha": "055499f1a85d9e6194157e5575435084a1f8db59",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/055499f1a85d9e6194157e5575435084a1f8db59"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/2f663152d2c1f54328d27efce443a9a4d57e06dc/comments",
            "commit": {
                "author": {
                    "date": "2024-10-29T12:03:06Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-29T12:03:06Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "message": "made wildlife json",
                "tree": {
                    "sha": "608ff81b7c959201bf5df97455d7e59ba7fd2d41",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/608ff81b7c959201bf5df97455d7e59ba7fd2d41"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/2f663152d2c1f54328d27efce443a9a4d57e06dc",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/2f663152d2c1f54328d27efce443a9a4d57e06dc",
            "node_id": "C_kwDOM8WH19oAKDJmNjYzMTUyZDJjMWY1NDMyOGQyN2VmY2U0NDNhOWE0ZDU3ZTA2ZGM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/28069602e89870fb51ce3739a2ac1830933c3859",
                    "sha": "28069602e89870fb51ce3739a2ac1830933c3859",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/28069602e89870fb51ce3739a2ac1830933c3859"
                }
            ],
            "sha": "2f663152d2c1f54328d27efce443a9a4d57e06dc",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/2f663152d2c1f54328d27efce443a9a4d57e06dc"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/28069602e89870fb51ce3739a2ac1830933c3859/comments",
            "commit": {
                "author": {
                    "date": "2024-10-29T11:51:01Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-29T11:51:01Z",
                    "email": "adityasingh789m@gmail.com",
                    "name": "aditya singh"
                },
                "message": "made json for wildlife ecology",
                "tree": {
                    "sha": "c464af65c0777f2d1f9ac73886842079d10bb831",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/c464af65c0777f2d1f9ac73886842079d10bb831"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/28069602e89870fb51ce3739a2ac1830933c3859",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
                "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
                "followers_url": "https://api.github.com/users/adii2ma/followers",
                "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
                "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/adii2ma",
                "id": 164670196,
                "login": "adii2ma",
                "node_id": "U_kgDOCdCq9A",
                "organizations_url": "https://api.github.com/users/adii2ma/orgs",
                "received_events_url": "https://api.github.com/users/adii2ma/received_events",
                "repos_url": "https://api.github.com/users/adii2ma/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/adii2ma",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/28069602e89870fb51ce3739a2ac1830933c3859",
            "node_id": "C_kwDOM8WH19oAKDI4MDY5NjAyZTg5ODcwZmI1MWNlMzczOWEyYWMxODMwOTMzYzM4NTk",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/c40c743842a894a4b50b483cf6a5a20cf2f33fc9",
                    "sha": "c40c743842a894a4b50b483cf6a5a20cf2f33fc9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c40c743842a894a4b50b483cf6a5a20cf2f33fc9"
                }
            ],
            "sha": "28069602e89870fb51ce3739a2ac1830933c3859",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/28069602e89870fb51ce3739a2ac1830933c3859"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c40c743842a894a4b50b483cf6a5a20cf2f33fc9/comments",
            "commit": {
                "author": {
                    "date": "2024-10-13T15:52:55Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-13T15:52:55Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #200 from ACM-VIT/dev\n\nDev",
                "tree": {
                    "sha": "5c23140c26d0f11fb90700bbec80193c723dd397",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/5c23140c26d0f11fb90700bbec80193c723dd397"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/c40c743842a894a4b50b483cf6a5a20cf2f33fc9",
                "verification": {
                    "payload": "tree 5c23140c26d0f11fb90700bbec80193c723dd397\nparent ee8f2a3d927c504d42e87524a877ab9db93db2c0\nparent f26ba7f904dbd1362052e4b3dbe2e24a648acd3b\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728834775 +0530\ncommitter GitHub <noreply@github.com> 1728834775 +0530\n\nMerge pull request #200 from ACM-VIT/dev\n\nDev",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnC+zXCRC1aQ7uu5UhlAAAzEwQAEnoAmy4hU6BRbnrs5CwMX+z\nnByzxXmXuhMDOHpXYYkb2jrJrLNUmfm/Co8pPsvchaoVFlmZ7NAof9jrOq8SReao\nEKHFPx4ApFFVDJyRuGFphyJkwJ8SIZhh+hLxRWK/yXWFINYAKzOjlb2LZv5Iw3Oz\nQxZV+ud1LCuyqXHjf6DxvH7mWora2EyYvDjreBerMsDflmd0qgiAMzZoj8CLSI1d\nim/j8AdVD1me2gckRewm7LLQP6gOr6ZVzRxW9YPPWI68WroIsm9wXLLbzwPek/Qh\nwC9kd7c6Isr1g5lj7IcrTfgP7h9gCnE2ox676A/nxgwHtKl5c4o/b+sgUZXcIZVn\nWGZg5GSPYd/Nl96FlTiU/QZ33AlJjbeZCHSQ8kf2+5sDBUH8NK6BQcxLL3mUO6H9\nXc3IZ0Njp6U5NbCnz/rlPW9zJ+eI5CcO2K8FyMea63NUzD26kkYxe6DFHvMIFBym\nEc+mQYk3/NIw8FMIwKpuHYEZZi2SaZilzxQiPtbibAgtBvEGUt0Jr4ekHm5YXj/R\nDY0khzZ9r/6Txyc/b31cSv3ZI8slEthAqBIHbpkFgG0JnR4CS6V1DrFOjrTiAgV1\natwmr6t6mD1QphjuuCUAdSf4Ingxi3Lw8lnLFbIje23+vDrTXFGgYYbUJ7wNheVE\nRNziGS3n+PV9Cc8O/ogs\n=ybei\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/c40c743842a894a4b50b483cf6a5a20cf2f33fc9",
            "node_id": "C_kwDOM8WH19oAKGM0MGM3NDM4NDJhODk0YTRiNTBiNDgzY2Y2YTVhMjBjZjJmMzNmYzk",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/ee8f2a3d927c504d42e87524a877ab9db93db2c0",
                    "sha": "ee8f2a3d927c504d42e87524a877ab9db93db2c0",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ee8f2a3d927c504d42e87524a877ab9db93db2c0"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/f26ba7f904dbd1362052e4b3dbe2e24a648acd3b",
                    "sha": "f26ba7f904dbd1362052e4b3dbe2e24a648acd3b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f26ba7f904dbd1362052e4b3dbe2e24a648acd3b"
                }
            ],
            "sha": "c40c743842a894a4b50b483cf6a5a20cf2f33fc9",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/c40c743842a894a4b50b483cf6a5a20cf2f33fc9"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/85606266?v=4",
                "events_url": "https://api.github.com/users/kairavsheth/events{/privacy}",
                "followers_url": "https://api.github.com/users/kairavsheth/followers",
                "following_url": "https://api.github.com/users/kairavsheth/following{/other_user}",
                "gists_url": "https://api.github.com/users/kairavsheth/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/kairavsheth",
                "id": 85606266,
                "login": "kairavsheth",
                "node_id": "MDQ6VXNlcjg1NjA2MjY2",
                "organizations_url": "https://api.github.com/users/kairavsheth/orgs",
                "received_events_url": "https://api.github.com/users/kairavsheth/received_events",
                "repos_url": "https://api.github.com/users/kairavsheth/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/kairavsheth/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/kairavsheth/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/kairavsheth",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f26ba7f904dbd1362052e4b3dbe2e24a648acd3b/comments",
            "commit": {
                "author": {
                    "date": "2024-10-13T11:32:21Z",
                    "email": "85606266+kairavsheth@users.noreply.github.com",
                    "name": "kairavsheth"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-13T11:32:45Z",
                    "email": "85606266+kairavsheth@users.noreply.github.com",
                    "name": "kairavsheth"
                },
                "message": "fix: redirect invalid routes to index",
                "tree": {
                    "sha": "7bcd1b50b8c2761ec9397aae9c1c6f7af3a49f4c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/7bcd1b50b8c2761ec9397aae9c1c6f7af3a49f4c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/f26ba7f904dbd1362052e4b3dbe2e24a648acd3b",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/85606266?v=4",
                "events_url": "https://api.github.com/users/kairavsheth/events{/privacy}",
                "followers_url": "https://api.github.com/users/kairavsheth/followers",
                "following_url": "https://api.github.com/users/kairavsheth/following{/other_user}",
                "gists_url": "https://api.github.com/users/kairavsheth/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/kairavsheth",
                "id": 85606266,
                "login": "kairavsheth",
                "node_id": "MDQ6VXNlcjg1NjA2MjY2",
                "organizations_url": "https://api.github.com/users/kairavsheth/orgs",
                "received_events_url": "https://api.github.com/users/kairavsheth/received_events",
                "repos_url": "https://api.github.com/users/kairavsheth/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/kairavsheth/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/kairavsheth/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/kairavsheth",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/f26ba7f904dbd1362052e4b3dbe2e24a648acd3b",
            "node_id": "C_kwDOM8WH19oAKGYyNmJhN2Y5MDRkYmQxMzYyMDUyZTRiM2RiZTJlMjRhNjQ4YWNkM2I",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/4704f5436a99c9faa952ffc08f2714a7e2f2a425",
                    "sha": "4704f5436a99c9faa952ffc08f2714a7e2f2a425",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4704f5436a99c9faa952ffc08f2714a7e2f2a425"
                }
            ],
            "sha": "f26ba7f904dbd1362052e4b3dbe2e24a648acd3b",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f26ba7f904dbd1362052e4b3dbe2e24a648acd3b"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/85606266?v=4",
                "events_url": "https://api.github.com/users/kairavsheth/events{/privacy}",
                "followers_url": "https://api.github.com/users/kairavsheth/followers",
                "following_url": "https://api.github.com/users/kairavsheth/following{/other_user}",
                "gists_url": "https://api.github.com/users/kairavsheth/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/kairavsheth",
                "id": 85606266,
                "login": "kairavsheth",
                "node_id": "MDQ6VXNlcjg1NjA2MjY2",
                "organizations_url": "https://api.github.com/users/kairavsheth/orgs",
                "received_events_url": "https://api.github.com/users/kairavsheth/received_events",
                "repos_url": "https://api.github.com/users/kairavsheth/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/kairavsheth/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/kairavsheth/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/kairavsheth",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4704f5436a99c9faa952ffc08f2714a7e2f2a425/comments",
            "commit": {
                "author": {
                    "date": "2024-10-13T11:17:59Z",
                    "email": "85606266+kairavsheth@users.noreply.github.com",
                    "name": "kairavsheth"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-13T11:17:59Z",
                    "email": "85606266+kairavsheth@users.noreply.github.com",
                    "name": "kairavsheth"
                },
                "message": "fix: dynamic opengraph",
                "tree": {
                    "sha": "40faaa6375e69ed7c762d1f1e14eadfd3b0aa2e4",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/40faaa6375e69ed7c762d1f1e14eadfd3b0aa2e4"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/4704f5436a99c9faa952ffc08f2714a7e2f2a425",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/85606266?v=4",
                "events_url": "https://api.github.com/users/kairavsheth/events{/privacy}",
                "followers_url": "https://api.github.com/users/kairavsheth/followers",
                "following_url": "https://api.github.com/users/kairavsheth/following{/other_user}",
                "gists_url": "https://api.github.com/users/kairavsheth/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/kairavsheth",
                "id": 85606266,
                "login": "kairavsheth",
                "node_id": "MDQ6VXNlcjg1NjA2MjY2",
                "organizations_url": "https://api.github.com/users/kairavsheth/orgs",
                "received_events_url": "https://api.github.com/users/kairavsheth/received_events",
                "repos_url": "https://api.github.com/users/kairavsheth/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/kairavsheth/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/kairavsheth/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/kairavsheth",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/4704f5436a99c9faa952ffc08f2714a7e2f2a425",
            "node_id": "C_kwDOM8WH19oAKDQ3MDRmNTQzNmE5OWM5ZmFhOTUyZmZjMDhmMjcxNGE3ZTJmMmE0MjU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/6344eb9df4d2fa295141559d39fe03d8e2e320d3",
                    "sha": "6344eb9df4d2fa295141559d39fe03d8e2e320d3",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6344eb9df4d2fa295141559d39fe03d8e2e320d3"
                }
            ],
            "sha": "4704f5436a99c9faa952ffc08f2714a7e2f2a425",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4704f5436a99c9faa952ffc08f2714a7e2f2a425"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ee8f2a3d927c504d42e87524a877ab9db93db2c0/comments",
            "commit": {
                "author": {
                    "date": "2024-10-12T20:41:34Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-12T20:41:34Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #199 from ACM-VIT/dev\n\nDev",
                "tree": {
                    "sha": "14d88d764a2f008ef91abe123bf226fe0bed51c3",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/14d88d764a2f008ef91abe123bf226fe0bed51c3"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/ee8f2a3d927c504d42e87524a877ab9db93db2c0",
                "verification": {
                    "payload": "tree 14d88d764a2f008ef91abe123bf226fe0bed51c3\nparent 352cb7b93de3e77226ad8d74fbd7bf550524582a\nparent 6344eb9df4d2fa295141559d39fe03d8e2e320d3\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728765694 +0530\ncommitter GitHub <noreply@github.com> 1728765694 +0530\n\nMerge pull request #199 from ACM-VIT/dev\n\nDev",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCt7/CRC1aQ7uu5UhlAAAkHQQAGWwsz7mPw4XbUXstU3R6BDV\nvvOhKgA3/utmA541JE4T/2iscAc8j3BgruqH6XsTRHXxXIkT5o4ItvcpV+sCdu8o\n5Kd8LC1pP+wfLDlfL1ud59tg+GiFhuaBQzjvYsd2dOgIFqzfGzv3O2V28grMsfgr\nTdCffSd5AStnE+CbvEwDB7ljobh7iDg5ZXLWkcRRs5aQhaGlQgeHKbvmtVTcbv24\niWmPYe4QlM/Jz09KGNiknuFHSRYwSjr3lAZED1zt76x34oub7ejlESTjyZHatz/a\nFyYCoskBOrwWi/014/lThWJyx50WKTI3r/imIJ+m6VpmJK1s/juIeCHxUOBQfjbf\nP5Niv1CbemGUHaE15awO8Y68MkxiP0isMRVhtbAR7j5G6DYR1AkmH9YlwOy9MXJS\n9lSTTo2o6A76av5mkEEcxzScYxW/+mW5o5av+JycZpT1QitmvSnVszhbYqvmSXLK\nQJWj+ZqRBTgr3op2nk/SLPCahTvC+jNokjal3gn5bM18sbrhDHaMzTuxVXGZVG9K\nHNTygEssexv/Gu/yaMXOnRZYoTkmR6hiZV8ysU0e1vgcITwnwAGIBYdA+bB2rYxH\n2cvCds5Nq8JlVfA+vzzJo0jforwyX6G6I9IEoAcT3USSGNXXkyHZZPruN5KMWSps\nMoffD3ycZULJ8efdTf89\n=fCjT\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/ee8f2a3d927c504d42e87524a877ab9db93db2c0",
            "node_id": "C_kwDOM8WH19oAKGVlOGYyYTNkOTI3YzUwNGQ0MmU4NzUyNGE4NzdhYjlkYjkzZGIyYzA",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/352cb7b93de3e77226ad8d74fbd7bf550524582a",
                    "sha": "352cb7b93de3e77226ad8d74fbd7bf550524582a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/352cb7b93de3e77226ad8d74fbd7bf550524582a"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/6344eb9df4d2fa295141559d39fe03d8e2e320d3",
                    "sha": "6344eb9df4d2fa295141559d39fe03d8e2e320d3",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6344eb9df4d2fa295141559d39fe03d8e2e320d3"
                }
            ],
            "sha": "ee8f2a3d927c504d42e87524a877ab9db93db2c0",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ee8f2a3d927c504d42e87524a877ab9db93db2c0"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6344eb9df4d2fa295141559d39fe03d8e2e320d3/comments",
            "commit": {
                "author": {
                    "date": "2024-10-12T07:39:09Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-12T07:39:09Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #198 from Alan-J-Bibins/dev\n\nfix: Fixed Glitchy Navbar and reordered items in the navbar",
                "tree": {
                    "sha": "4f4cf4bd8203aa2d9f6b1334d1f1a7a7ba455640",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/4f4cf4bd8203aa2d9f6b1334d1f1a7a7ba455640"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/6344eb9df4d2fa295141559d39fe03d8e2e320d3",
                "verification": {
                    "payload": "tree 4f4cf4bd8203aa2d9f6b1334d1f1a7a7ba455640\nparent 33d08e4ec577d15cec1efefbf6995d8ef1a37140\nparent 5eb1738ed06e19aab84d0bfdbad0951be1fbda6f\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728718749 +0530\ncommitter GitHub <noreply@github.com> 1728718749 +0530\n\nMerge pull request #198 from Alan-J-Bibins/dev\n\nfix: Fixed Glitchy Navbar and reordered items in the navbar",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCiedCRC1aQ7uu5UhlAAAglQQAKWdWKg7QZL9YtI4H48VyXE9\nKovhwG6hlCJ5HyjNo9AsmHrBNpNK8gk1zjThCKFxBYazCtqg621DDyAB0uBsXEoV\nXEMQ5v54AeyWkSigLXpX9XAdIRdbrmpGCPSA+x9t/4lmxTH6G8joMuVmfK/JpQCe\nNfO52uol0TVY/Q6sbpOLHHmvQgU8tatG5hY1nSfZOd35VY2NJ0laba9jo71VgM16\nMFK0wPKXF0PhX3GGhnYm+XUqLT6LazQSBNU0ZKdIZDTfKGBq0cdcWuSMyxXGzIGB\ny0yY9u3dGAM5pWdfwXRXLsgvRoHFEWqkYmg90wPM0fc9XUo+/Qd87hKy+x0ItPxu\nNIximqugQr3SK9giW05Tg8pcsXqWEu9uDS06yUQyGB7KlQmqQ0X+h4X9u1FP/6jS\nyxxgm7sEUEbpk6/n5NMbJhdIN8ZIfLqTss9e0MzGpoHt0yjVXa0Uuv0GHL72KPbN\noqEXxFsxAQofoOAvnaXVSpdmTuGXkGV/Gc+Oz7WWtzJU3N9+7ZiFIMmhyJOg5r3r\n3yngPX3QJEzktQTgCf0idc/iyM5dAhzrFuQK27ZK8hxF1ipb3DZeA4rAQZBBEgt2\nY5Q6gH8IiuFCDWEjEWS+JkS8dxWJnTwjwJELZNzAaVd9aVSvbB4/jHyXUqt/0zS4\nXN+60xGJnKo0uwyW8VzZ\n=6Eb+\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/6344eb9df4d2fa295141559d39fe03d8e2e320d3",
            "node_id": "C_kwDOM8WH19oAKDYzNDRlYjlkZjRkMmZhMjk1MTQxNTU5ZDM5ZmUwM2Q4ZTJlMzIwZDM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/33d08e4ec577d15cec1efefbf6995d8ef1a37140",
                    "sha": "33d08e4ec577d15cec1efefbf6995d8ef1a37140",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/33d08e4ec577d15cec1efefbf6995d8ef1a37140"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/5eb1738ed06e19aab84d0bfdbad0951be1fbda6f",
                    "sha": "5eb1738ed06e19aab84d0bfdbad0951be1fbda6f",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5eb1738ed06e19aab84d0bfdbad0951be1fbda6f"
                }
            ],
            "sha": "6344eb9df4d2fa295141559d39fe03d8e2e320d3",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6344eb9df4d2fa295141559d39fe03d8e2e320d3"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5eb1738ed06e19aab84d0bfdbad0951be1fbda6f/comments",
            "commit": {
                "author": {
                    "date": "2024-10-12T07:31:30Z",
                    "email": "89975500+Alan-J-Bibins@users.noreply.github.com",
                    "name": "Alan J Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-12T07:31:30Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge branch 'ACM-VIT:dev' into dev",
                "tree": {
                    "sha": "4f4cf4bd8203aa2d9f6b1334d1f1a7a7ba455640",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/4f4cf4bd8203aa2d9f6b1334d1f1a7a7ba455640"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/5eb1738ed06e19aab84d0bfdbad0951be1fbda6f",
                "verification": {
                    "payload": "tree 4f4cf4bd8203aa2d9f6b1334d1f1a7a7ba455640\nparent 3c4e8725977fbdf04ece8ad607feab9298fba661\nparent 33d08e4ec577d15cec1efefbf6995d8ef1a37140\nauthor Alan J Bibins <89975500+Alan-J-Bibins@users.noreply.github.com> 1728718290 +0530\ncommitter GitHub <noreply@github.com> 1728718290 +0530\n\nMerge branch 'ACM-VIT:dev' into dev\n",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCiXSCRC1aQ7uu5UhlAAAU50QAJ13YsOuQQmK81gXbF74n4Z0\nT+OGZuy0zpkqK94iJ1m6B24W1rsh49pzuQtQEc0rhbLl9WsnPlKkQZItI1o8vNyD\nQP9sR7hc/A8cGCXnlMx7dvm8PEk9Ei9XLCNDJp4Qx4kTPpQmzcB469UJZA3aTzfS\n/3qhFFtnUicMMpjmdBQcWoYq2zUxLCguom9sS654oMvdgMEe7BZVNqRLgQ3qS5zo\n49G/HQvRgttJVRRoRsthrSNbVHQFmndJNbZTL0MvpjOzgsZpbcTUoFuQDy4pDdFb\n39jvh/uqW8siNtNzFk7zAtNqKoir6TyDEvHG/gFDuIOOF9iP0ORnM9rPZR+hFqd8\nqQ7SC4jo5fws/wUkccyF3J5If/mO6PT4/7WfegeCd5HXXe0tXNm+oUIVYsmM3gPf\nlYdzhE7kPWp3ifLVp5Qs9zmij4AAUhUDfD2vyUHL3lxsvtL1YRzu5WWDprBD+Lh8\n76IOlRVM5XeKRZdrsRZKygITFmDKUz66V0pIK5pb9z2PVL+88F9U3vzn0zrxsdyE\nvd20WMxjddoyVqBelA0M1CrAqxvNVL4cmcKYMWrAcPGkjS81yU4eEcQtxn3J/zEm\n2wIxvJj1BRKv6v8jxLgmMxlH0LdOm8/ae4rW3UN0tVgw/mdkD6+nqB4hTC4vBUFe\nqO1axeXc/hxoo2f0R6wr\n=mYFy\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-11T12:15:58Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/5eb1738ed06e19aab84d0bfdbad0951be1fbda6f",
            "node_id": "C_kwDOM8WH19oAKDVlYjE3MzhlZDA2ZTE5YWFiODRkMGJmZGJhZDA5NTFiZTFmYmRhNmY",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/3c4e8725977fbdf04ece8ad607feab9298fba661",
                    "sha": "3c4e8725977fbdf04ece8ad607feab9298fba661",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/3c4e8725977fbdf04ece8ad607feab9298fba661"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/33d08e4ec577d15cec1efefbf6995d8ef1a37140",
                    "sha": "33d08e4ec577d15cec1efefbf6995d8ef1a37140",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/33d08e4ec577d15cec1efefbf6995d8ef1a37140"
                }
            ],
            "sha": "5eb1738ed06e19aab84d0bfdbad0951be1fbda6f",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5eb1738ed06e19aab84d0bfdbad0951be1fbda6f"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/3c4e8725977fbdf04ece8ad607feab9298fba661/comments",
            "commit": {
                "author": {
                    "date": "2024-10-12T07:08:43Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-12T07:08:43Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "fix: fixed glitchy border on closing and reordered items",
                "tree": {
                    "sha": "3d35e2984d22205290c810ec4a27e1ac63a25898",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/3d35e2984d22205290c810ec4a27e1ac63a25898"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/3c4e8725977fbdf04ece8ad607feab9298fba661",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/3c4e8725977fbdf04ece8ad607feab9298fba661",
            "node_id": "C_kwDOM8WH19oAKDNjNGU4NzI1OTc3ZmJkZjA0ZWNlOGFkNjA3ZmVhYjkyOThmYmE2NjE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/15adc1c65221685b90e8d4b4759455911870979b",
                    "sha": "15adc1c65221685b90e8d4b4759455911870979b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/15adc1c65221685b90e8d4b4759455911870979b"
                }
            ],
            "sha": "3c4e8725977fbdf04ece8ad607feab9298fba661",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/3c4e8725977fbdf04ece8ad607feab9298fba661"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/33d08e4ec577d15cec1efefbf6995d8ef1a37140/comments",
            "commit": {
                "author": {
                    "date": "2024-10-12T07:04:51Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-12T07:04:51Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #197 from mahendra785/dev\n\nfix : todo , favourites",
                "tree": {
                    "sha": "8ba5af991da369fc87622eb53f54f3304b809c65",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/8ba5af991da369fc87622eb53f54f3304b809c65"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/33d08e4ec577d15cec1efefbf6995d8ef1a37140",
                "verification": {
                    "payload": "tree 8ba5af991da369fc87622eb53f54f3304b809c65\nparent 15adc1c65221685b90e8d4b4759455911870979b\nparent a4d8a6d64b0317615d73db8997d168369ddaa7a2\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728716691 +0530\ncommitter GitHub <noreply@github.com> 1728716691 +0530\n\nMerge pull request #197 from mahendra785/dev\n\nfix : todo , favourites",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCh+TCRC1aQ7uu5UhlAAA0Y8QAB2fKxqA+VjSWHlXUYntCOsp\nCGPuFunonsA+H70qtwxaEipoV2xOJu8hgRpqdKZBPLdWThfWGA5CEOkQzplGmDLD\nz+ffXtilCYxx3dHDBb6meg/2IJGpl2ZE+pHgIBoEJaUYCYe2hvN/fT1rftj0nN04\nblka+9dX9NUXXy/TqMKLNnuibJxYRN8osgM0mjTPxP5nHazSR9qaXsZsh7jheJoj\nh7B4DuFZJmYuBmf0bVCLFfceEmRXtx+gFxA7vPGoK8bDirhoWoDRhZVEvGOaRdJ8\ndMmxHsKAhxdMQ3FGnmq5jgCIHqqTRiVqh4/VG6XRTr0kRPARQ4ImilhfMEcOZzI0\ndwWbj6jK79F7nhstjYGZRgqOqI6KhFUJmoNsuEagK/3/nZEDUgcn/vNNocOFlMKD\nWQI9ItZavtbMP7InXXb7ArU6QmgnjG1nwBYMxyCiw0n6jN2aBIDCHPnXBWkqrrhS\n2LJGhVsaFyiSXWY9FOjXQAVgm4+MGXcHnYIHCYQoXyGoBKzlHk9NlhFWum9fojpz\n71BvLtn6xDPDFnCQQteTlN0P3GO0TqO5LYJuok4rJnY2LQwC2FJj6NNttkK5sZPU\npdyAKaXGamI00BLVotqZSSXD8vdMF9KlXyjIYVpUdfh/koPbwZEOn3+IaBokqzuw\nox9fReMlUbEUv4h09E96\n=VixQ\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/33d08e4ec577d15cec1efefbf6995d8ef1a37140",
            "node_id": "C_kwDOM8WH19oAKDMzZDA4ZTRlYzU3N2QxNWNlYzFlZmVmYmY2OTk1ZDhlZjFhMzcxNDA",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/15adc1c65221685b90e8d4b4759455911870979b",
                    "sha": "15adc1c65221685b90e8d4b4759455911870979b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/15adc1c65221685b90e8d4b4759455911870979b"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/a4d8a6d64b0317615d73db8997d168369ddaa7a2",
                    "sha": "a4d8a6d64b0317615d73db8997d168369ddaa7a2",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a4d8a6d64b0317615d73db8997d168369ddaa7a2"
                }
            ],
            "sha": "33d08e4ec577d15cec1efefbf6995d8ef1a37140",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/33d08e4ec577d15cec1efefbf6995d8ef1a37140"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a4d8a6d64b0317615d73db8997d168369ddaa7a2/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T17:09:02Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T17:09:02Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "fix : todo , favourites",
                "tree": {
                    "sha": "8ba5af991da369fc87622eb53f54f3304b809c65",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/8ba5af991da369fc87622eb53f54f3304b809c65"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/a4d8a6d64b0317615d73db8997d168369ddaa7a2",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/a4d8a6d64b0317615d73db8997d168369ddaa7a2",
            "node_id": "C_kwDOM8WH19oAKGE0ZDhhNmQ2NGIwMzE3NjE1ZDczZGI4OTk3ZDE2ODM2OWRkYWE3YTI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/15adc1c65221685b90e8d4b4759455911870979b",
                    "sha": "15adc1c65221685b90e8d4b4759455911870979b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/15adc1c65221685b90e8d4b4759455911870979b"
                }
            ],
            "sha": "a4d8a6d64b0317615d73db8997d168369ddaa7a2",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a4d8a6d64b0317615d73db8997d168369ddaa7a2"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/352cb7b93de3e77226ad8d74fbd7bf550524582a/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T16:28:22Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T16:28:22Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #196 from ACM-VIT/dev\n\nDev",
                "tree": {
                    "sha": "2d5252c8169d0559c70db540d7e69ebe06572cbd",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/2d5252c8169d0559c70db540d7e69ebe06572cbd"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/352cb7b93de3e77226ad8d74fbd7bf550524582a",
                "verification": {
                    "payload": "tree 2d5252c8169d0559c70db540d7e69ebe06572cbd\nparent aaadba2376c1612a756a8d633ae53c9b56abd9fe\nparent 15adc1c65221685b90e8d4b4759455911870979b\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728664102 +0530\ncommitter GitHub <noreply@github.com> 1728664102 +0530\n\nMerge pull request #196 from ACM-VIT/dev\n\nDev",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCVImCRC1aQ7uu5UhlAAAOesQADE+rUTYlfLFAnEmvNxdogyo\nQyuFm6mKvuAO9UjdztcEnmn0lF8OZBDeZk1ddr2Fwzj8w2baMP1TydBHeI4g15RZ\nVJkDUnGDpnWctkKILW0ITIVmG29D4O9P+UyElWG7LH94KY6HSSuii1i0qiWGZlrT\nXcTulv6GISTOi0wk3R0eQFW/5TIwiDdKdI4nipurBELkrc1hJZB543l9SMgIJGLy\nlP8XNfa99sLu8vfV8v9J56jl/cZIjqskiLspQJU4BM4eZlFS7UgMcorRRyAbl0f1\nWGOyo34QLxLFWRf52wuWE3CWxa1Tv3xxwCk4MNJuVRbVVcHlCfpUoyQYf6uEUanP\nSI85rTwp/erodGXexQnLSNCt/HO+8NMdOGQR3y/MzLozG6RdbMO1z/K/1jvSK51T\nYuG9h9y8yr88sxzFsAtxUq56jNdb5BeJtkbiRGFRMXDWHN6lN1kdKRKbKx4sdRjQ\n57Udw07YOI2CwU9b/fb2BLmxhgXTLwGaLfSxuMvNoIJyUdBAuJ4rEWHUoVwsbOgS\nxD+3SoCyNm9aq1jEY4q/INlh63gFsqLBkPon3G7xtDvnQX/LX+azBrlbBsuX6qMX\nwC9qYsyx7NrMuE5CXeRhuqlVQCToyU8wNnnobE3uVajSxdcFxJhfY5s+WN0By9Pm\nn1uzWrvR3zw+JHAIjc56\n=WQx3\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/352cb7b93de3e77226ad8d74fbd7bf550524582a",
            "node_id": "C_kwDOM8WH19oAKDM1MmNiN2I5M2RlM2U3NzIyNmFkOGQ3NGZiZDdiZjU1MDUyNDU4MmE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/aaadba2376c1612a756a8d633ae53c9b56abd9fe",
                    "sha": "aaadba2376c1612a756a8d633ae53c9b56abd9fe",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/aaadba2376c1612a756a8d633ae53c9b56abd9fe"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/15adc1c65221685b90e8d4b4759455911870979b",
                    "sha": "15adc1c65221685b90e8d4b4759455911870979b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/15adc1c65221685b90e8d4b4759455911870979b"
                }
            ],
            "sha": "352cb7b93de3e77226ad8d74fbd7bf550524582a",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/352cb7b93de3e77226ad8d74fbd7bf550524582a"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/15adc1c65221685b90e8d4b4759455911870979b/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T16:27:54Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T16:27:54Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #195 from RohitPhaniramSakamuri/dev\n\nfixed edit issue",
                "tree": {
                    "sha": "ed49ee6f4b4d8449042054cd0a910161bac93ea8",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/ed49ee6f4b4d8449042054cd0a910161bac93ea8"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/15adc1c65221685b90e8d4b4759455911870979b",
                "verification": {
                    "payload": "tree ed49ee6f4b4d8449042054cd0a910161bac93ea8\nparent 8e133c201c4417b8a986a72323e2a67530b2fb66\nparent 80b4ec5d09b0b9b90668496186de2b145c44a4e6\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728664074 +0530\ncommitter GitHub <noreply@github.com> 1728664074 +0530\n\nMerge pull request #195 from RohitPhaniramSakamuri/dev\n\nfixed edit issue",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCVIKCRC1aQ7uu5UhlAAAq6gQAIiOn7RY4gX/zV+M/RwYaaQm\nI3p5GU/XLy0icIL6ZwD8CpXIFsU10qC2viyrETDoRo5jhAHZ7/ZK22d1kl5wKdss\nSXvtFRHlea4HDKCEru9S3oAZrDns38nvBKCTjwk8NqIET66uT5GT472bpoVBLNTY\ntCbVv3oi6nvcBL2tXree8/7UuvwyUrcSJ7I7x1UshkgvGix1mNMpilmwDqt32ODt\nGATxfgVbVDm/2sPiFLcSyzCnYq4oc/dq+oOFzfz1RsXQVGG5svCrOFqqndgZ/AlK\n7gBBs3TUDOcXro5kL9kAejALVkLNP9iq2CAsRV2m6l6cLFxKcWYRoy459pbfKqTL\n886UE47RNCsyhEHZK8It7OB6xGhgkadhQzK+fTRNsmJMqPTlsji7iZeJUhoLlPqA\nP+GNd6EcNdxbIuHUcRWTjmfj7fvJ+y/KOFnLu2DTgnA3UdSrbukBAWQQiYpwr5x4\nYtoTbiFla8zMD09bzpmnTHneiIkWIx4kS1mFgO/+ryEQDR+Ayyq8f1na+PptiKtX\n8+rZvZszeK3ekbiZ/YgG4Hv7JHLoSchEPc2PP7iJ6AmWFbtrb3DDXtyfkWsaV20F\nxsoGEZ+VNn/XgPOIrb+VZaj6Y8TtOUYQSNhdG2vwrN2VWyBIvddpxzOR1lqYI0sQ\nAIfgKxAaP/kxweDYUUfs\n=OdiR\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/15adc1c65221685b90e8d4b4759455911870979b",
            "node_id": "C_kwDOM8WH19oAKDE1YWRjMWM2NTIyMTY4NWI5MGU4ZDRiNDc1OTQ1NTkxMTg3MDk3OWI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/8e133c201c4417b8a986a72323e2a67530b2fb66",
                    "sha": "8e133c201c4417b8a986a72323e2a67530b2fb66",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8e133c201c4417b8a986a72323e2a67530b2fb66"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/80b4ec5d09b0b9b90668496186de2b145c44a4e6",
                    "sha": "80b4ec5d09b0b9b90668496186de2b145c44a4e6",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/80b4ec5d09b0b9b90668496186de2b145c44a4e6"
                }
            ],
            "sha": "15adc1c65221685b90e8d4b4759455911870979b",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/15adc1c65221685b90e8d4b4759455911870979b"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/80b4ec5d09b0b9b90668496186de2b145c44a4e6/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T15:45:38Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T15:45:38Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "message": "fixed edit issue",
                "tree": {
                    "sha": "ed49ee6f4b4d8449042054cd0a910161bac93ea8",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/ed49ee6f4b4d8449042054cd0a910161bac93ea8"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/80b4ec5d09b0b9b90668496186de2b145c44a4e6",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/80b4ec5d09b0b9b90668496186de2b145c44a4e6",
            "node_id": "C_kwDOM8WH19oAKDgwYjRlYzVkMDliMGI5YjkwNjY4NDk2MTg2ZGUyYjE0NWM0NGE0ZTY",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/8e133c201c4417b8a986a72323e2a67530b2fb66",
                    "sha": "8e133c201c4417b8a986a72323e2a67530b2fb66",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8e133c201c4417b8a986a72323e2a67530b2fb66"
                }
            ],
            "sha": "80b4ec5d09b0b9b90668496186de2b145c44a4e6",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/80b4ec5d09b0b9b90668496186de2b145c44a4e6"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8e133c201c4417b8a986a72323e2a67530b2fb66/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T15:30:49Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T15:30:49Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #194 from mahendra785/dev\n\nfix : header and todo",
                "tree": {
                    "sha": "9e73317ab02abf33f34493e8bd540c95ad9fb67d",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/9e73317ab02abf33f34493e8bd540c95ad9fb67d"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/8e133c201c4417b8a986a72323e2a67530b2fb66",
                "verification": {
                    "payload": "tree 9e73317ab02abf33f34493e8bd540c95ad9fb67d\nparent d1e39fe49e3e9c669ac801bc996515495ffa5065\nparent dfc68b888556422f7761ec044527e14759b1d725\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728660649 +0530\ncommitter GitHub <noreply@github.com> 1728660649 +0530\n\nMerge pull request #194 from mahendra785/dev\n\nfix : header and todo",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCUSpCRC1aQ7uu5UhlAAAdgkQADIF3lq4EJ6B3haf3syoIrKz\naD05rTH1sn3TQEuEgEdysxpYfh1tDMufNmV16T5z9wGXA2TQABX4arlsBanSlut7\nTvqcMv9fXkKSDL74MuC/wYMD0iNbGQmKYVUBj2rAzWhuyHrqZd8YgALpYUoxvqdZ\nuBQyHNXdg4Qa5hfRna8XQ2RVP+prhpJsma3JgP7BsrbqZidnAqrnxkatjbLEei0d\nuOuf/AeLM3W+nXyPWXsl/QV9LepzF5PleLHdBDItI1M18Zf/TbWt3144QNplTKpd\n9QfVfDesVcF7KFuHZCR5jBZ/705/mupIFAQkI4RJBsaICzPtZrQ9miFVrqAYVT76\nY/hIcpRhPKxv3cjSJ4FieXdc/+1zQQjWL/bxNiucesl+NxxqeBRbOpIc4r+YnM4d\ns3XHFyrCnf6AFVs0BOHrRR8+6dqHdEWlvDRvrd3diTf+l6CXfLPlVbcpiYDHOzjy\nYTiVdHNSHYNdoxuFPA4AGqyf6qMO1okdUTpEF2e2n0RD8alPunr24H0HE/9tA3Ih\nZmA5z5lCFzGlUFXXxkTHT9AOX3g+/0p/lNuZTWT81ZyAlAG3WDIDwOVdriD1Xh2i\nUNu/jYIMQnG3EEzOm+OCwkaqVi9BwvU6M1uM3UB6lNWEhX7DIxbOV16y/VXLjqMu\nRudXKWwUAWODR47Yxq0V\n=nC8p\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/8e133c201c4417b8a986a72323e2a67530b2fb66",
            "node_id": "C_kwDOM8WH19oAKDhlMTMzYzIwMWM0NDE3YjhhOTg2YTcyMzIzZTJhNjc1MzBiMmZiNjY",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d1e39fe49e3e9c669ac801bc996515495ffa5065",
                    "sha": "d1e39fe49e3e9c669ac801bc996515495ffa5065",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d1e39fe49e3e9c669ac801bc996515495ffa5065"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/dfc68b888556422f7761ec044527e14759b1d725",
                    "sha": "dfc68b888556422f7761ec044527e14759b1d725",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/dfc68b888556422f7761ec044527e14759b1d725"
                }
            ],
            "sha": "8e133c201c4417b8a986a72323e2a67530b2fb66",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8e133c201c4417b8a986a72323e2a67530b2fb66"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/145484643?v=4",
                "events_url": "https://api.github.com/users/mahendra785/events{/privacy}",
                "followers_url": "https://api.github.com/users/mahendra785/followers",
                "following_url": "https://api.github.com/users/mahendra785/following{/other_user}",
                "gists_url": "https://api.github.com/users/mahendra785/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/mahendra785",
                "id": 145484643,
                "login": "mahendra785",
                "node_id": "U_kgDOCKvrYw",
                "organizations_url": "https://api.github.com/users/mahendra785/orgs",
                "received_events_url": "https://api.github.com/users/mahendra785/received_events",
                "repos_url": "https://api.github.com/users/mahendra785/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/mahendra785/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mahendra785/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/mahendra785",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/dfc68b888556422f7761ec044527e14759b1d725/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T14:47:51Z",
                    "email": "145484643+mahendra785@users.noreply.github.com",
                    "name": "Mahendra Sajjan Choudhary"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T14:47:51Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge branch 'ACM-VIT:dev' into dev",
                "tree": {
                    "sha": "9e73317ab02abf33f34493e8bd540c95ad9fb67d",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/9e73317ab02abf33f34493e8bd540c95ad9fb67d"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/dfc68b888556422f7761ec044527e14759b1d725",
                "verification": {
                    "payload": "tree 9e73317ab02abf33f34493e8bd540c95ad9fb67d\nparent 13fc084a7eab7d1c6c0494652b72dbe8d0b463a1\nparent d1e39fe49e3e9c669ac801bc996515495ffa5065\nauthor Mahendra Sajjan Choudhary <145484643+mahendra785@users.noreply.github.com> 1728658071 +0530\ncommitter GitHub <noreply@github.com> 1728658071 +0530\n\nMerge branch 'ACM-VIT:dev' into dev\n",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCTqXCRC1aQ7uu5UhlAAA8jQQAHnERTCdPecx1hSMPkE4dBcP\n+0GYIO9/ROXOX247CLSmZqCt464Jc1f8+A571rnNpN7xo/K/x2IkP8H+A0SYBPKM\nAJOJVbc4ZwnwFy/jEhfaDXmy019lmR0osFe/sleETR4tlSXfJnNOUgNKkQMmVRy7\nBaCkPlp6NzcRdsoqwASAuIP/0QFyiECpz+wZbdHo0rgA348VcDqK/TYMuP1MvzJ2\n1WKASuq19WU53MvP8oW9MfIeYkf0gSujaoQ7yBDSZZNu2EropZZEsdxZm1Qx5mGX\n3PuGUfAFknvgfVBTXTIbUN3JWDOQH4aGc5OZedr3gMDo3lnqS9TqMTV1QxmOWLmz\nqCYdsVtnaY9NqksMrA6vhJAybRLvdooE18iOYH1qW0OxT0xB4i/Hs9Nbfvc7jzVd\nSrlxnDPSbIdcXhjmN7tn+njmLHjxFyGpZktp4IAjdaR6CEoDAf1wZbk5Rgs9c6VJ\nou4iqwo77pglLaaGuPZfDS1AzmYAIaITn+xp5xR0OV3FCgWC3UlBeWNXoohIi1pg\nymvFXQDxlJM9nHysKao/tcFGd62Zb1JSsQTvDu1besvCKi34lClnTZ4B7kvptM5I\nth3eXqTRVoY5OB21qOJg2Q6MR285EgYRNgt/vxyDcfVqfJjd1PBBKCLaYMjyzQhI\n+K8uRJXAP8Q1B3P4JwzU\n=HRB0\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-16T19:36:57Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/dfc68b888556422f7761ec044527e14759b1d725",
            "node_id": "C_kwDOM8WH19oAKGRmYzY4Yjg4ODU1NjQyMmY3NzYxZWMwNDQ1MjdlMTQ3NTliMWQ3MjU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/13fc084a7eab7d1c6c0494652b72dbe8d0b463a1",
                    "sha": "13fc084a7eab7d1c6c0494652b72dbe8d0b463a1",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/13fc084a7eab7d1c6c0494652b72dbe8d0b463a1"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d1e39fe49e3e9c669ac801bc996515495ffa5065",
                    "sha": "d1e39fe49e3e9c669ac801bc996515495ffa5065",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d1e39fe49e3e9c669ac801bc996515495ffa5065"
                }
            ],
            "sha": "dfc68b888556422f7761ec044527e14759b1d725",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/dfc68b888556422f7761ec044527e14759b1d725"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/13fc084a7eab7d1c6c0494652b72dbe8d0b463a1/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T14:46:11Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T14:46:11Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "fix : merge conflict",
                "tree": {
                    "sha": "a084a4bfc3e2756e715e638213f3465638a5a9d4",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/a084a4bfc3e2756e715e638213f3465638a5a9d4"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/13fc084a7eab7d1c6c0494652b72dbe8d0b463a1",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/13fc084a7eab7d1c6c0494652b72dbe8d0b463a1",
            "node_id": "C_kwDOM8WH19oAKDEzZmMwODRhN2VhYjdkMWM2YzA0OTQ2NTJiNzJkYmU4ZDBiNDYzYTE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/a12ce085538549f96d57f788f25d7646a13e804e",
                    "sha": "a12ce085538549f96d57f788f25d7646a13e804e",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a12ce085538549f96d57f788f25d7646a13e804e"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43",
                    "sha": "d1ec2ff1ccbb7063e811a8372816cd3a5953ab43",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43"
                }
            ],
            "sha": "13fc084a7eab7d1c6c0494652b72dbe8d0b463a1",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/13fc084a7eab7d1c6c0494652b72dbe8d0b463a1"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d1e39fe49e3e9c669ac801bc996515495ffa5065/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T14:41:24Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T14:41:24Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #193 from Alan-J-Bibins/dev\n\nfix: Syllabus page and social media toast",
                "tree": {
                    "sha": "2b24b6347a1d44bf1abba19a983aa4395d5337e8",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/2b24b6347a1d44bf1abba19a983aa4395d5337e8"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/d1e39fe49e3e9c669ac801bc996515495ffa5065",
                "verification": {
                    "payload": "tree 2b24b6347a1d44bf1abba19a983aa4395d5337e8\nparent d1ec2ff1ccbb7063e811a8372816cd3a5953ab43\nparent 7a243b5f205a9ed2e74b7a88a16e8d325eed7a82\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728657684 +0530\ncommitter GitHub <noreply@github.com> 1728657684 +0530\n\nMerge pull request #193 from Alan-J-Bibins/dev\n\nfix: Syllabus page and social media toast",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCTkUCRC1aQ7uu5UhlAAAKD8QAKct0Kq65L0+UmwLEmTBZk0F\nsI1mV/n2mKVh1TCAB+3jOfWF0UvCqbbcGz0SBSMVDd8/wbB2ycaCO/t7PFyvKISy\nbY+H68AvNg02sEHFAVUq1VmzyFDwSmzoYof+8xsIhwfedONOFjk0fnd+X+1kB0uM\nlm7gSzq1A4C7WapycLydGUv7roN++hvhsmCSMb8/LxKZHtPNwu0O3bgu2i4Oo/iS\nqvyNh7Z04yjyI5eBRbfC0jgkT67N8nGwXllckYPgWJCO0t7f31NuVeraNKnw2rUc\ndUXukw4CJAS7XbGB65K2fwAvstFP77tvM1cevHjGGWMpo70AFeKNYLMQZwY9v507\nd2uah5SczK5NU9aHJlWEzZtQZ0oUcX+KpXavEEB3qoeB1qsFmpqubozPJjRybH4z\nnr+sCAWLBk1ArNRquX3bbvpCDmcgOEUPbwclQwx2LFO3UQMGDCoAVoMoXHuzGdSV\nlY7UQU2IjESPsgshKv8KOElQgkTNjpxcly/sG28dsgQDs3jCOMwFxo+Qv/4CYHCv\n6I3qZmx04LyPRyLfXj8hOg5Kdxe7WZ/Nbhu02/QtkWesHYACsHfN8ykAEj8ZN7+6\nmTz6S4jPZp5KuOuPgEzwIp4ygTlWjmmcLvafe760NW5mLUc6ZjLJaOxcpyTpsFuY\n60iJbiUea8bS0vhkjnZv\n=Eyfm\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/d1e39fe49e3e9c669ac801bc996515495ffa5065",
            "node_id": "C_kwDOM8WH19oAKGQxZTM5ZmU0OWUzZTljNjY5YWM4MDFiYzk5NjUxNTQ5NWZmYTUwNjU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43",
                    "sha": "d1ec2ff1ccbb7063e811a8372816cd3a5953ab43",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/7a243b5f205a9ed2e74b7a88a16e8d325eed7a82",
                    "sha": "7a243b5f205a9ed2e74b7a88a16e8d325eed7a82",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/7a243b5f205a9ed2e74b7a88a16e8d325eed7a82"
                }
            ],
            "sha": "d1e39fe49e3e9c669ac801bc996515495ffa5065",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d1e39fe49e3e9c669ac801bc996515495ffa5065"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a12ce085538549f96d57f788f25d7646a13e804e/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T14:40:40Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T14:40:40Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "feat: todo responsive",
                "tree": {
                    "sha": "4bc2332c89616b3be62d2bfa09953ac8d9bf0b5d",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/4bc2332c89616b3be62d2bfa09953ac8d9bf0b5d"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/a12ce085538549f96d57f788f25d7646a13e804e",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/a12ce085538549f96d57f788f25d7646a13e804e",
            "node_id": "C_kwDOM8WH19oAKGExMmNlMDg1NTM4NTQ5Zjk2ZDU3Zjc4OGYyNWQ3NjQ2YTEzZTgwNGU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/ccdf55302d93db64cfed1a389f3d328f1ded5524",
                    "sha": "ccdf55302d93db64cfed1a389f3d328f1ded5524",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ccdf55302d93db64cfed1a389f3d328f1ded5524"
                }
            ],
            "sha": "a12ce085538549f96d57f788f25d7646a13e804e",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a12ce085538549f96d57f788f25d7646a13e804e"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ccdf55302d93db64cfed1a389f3d328f1ded5524/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T14:36:39Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T14:36:39Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "fix : header and todo",
                "tree": {
                    "sha": "fc1d35f3eeec6e1882f33c30c341a09f7b8ae9e4",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/fc1d35f3eeec6e1882f33c30c341a09f7b8ae9e4"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/ccdf55302d93db64cfed1a389f3d328f1ded5524",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/ccdf55302d93db64cfed1a389f3d328f1ded5524",
            "node_id": "C_kwDOM8WH19oAKGNjZGY1NTMwMmQ5M2RiNjRjZmVkMWEzODlmM2QzMjhmMWRlZDU1MjQ",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d76a4537af2a74d841b6687130e59dadc09223c9",
                    "sha": "d76a4537af2a74d841b6687130e59dadc09223c9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d76a4537af2a74d841b6687130e59dadc09223c9"
                }
            ],
            "sha": "ccdf55302d93db64cfed1a389f3d328f1ded5524",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ccdf55302d93db64cfed1a389f3d328f1ded5524"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/7a243b5f205a9ed2e74b7a88a16e8d325eed7a82/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T14:17:04Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T14:17:04Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "fix: uncommented code for social media post",
                "tree": {
                    "sha": "2b24b6347a1d44bf1abba19a983aa4395d5337e8",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/2b24b6347a1d44bf1abba19a983aa4395d5337e8"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/7a243b5f205a9ed2e74b7a88a16e8d325eed7a82",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/7a243b5f205a9ed2e74b7a88a16e8d325eed7a82",
            "node_id": "C_kwDOM8WH19oAKDdhMjQzYjVmMjA1YTllZDJlNzRiN2E4OGExNmU4ZDMyNWVlZDdhODI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/fbe5993f9723d13518cca249d3d3a4b5dac3c88b",
                    "sha": "fbe5993f9723d13518cca249d3d3a4b5dac3c88b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fbe5993f9723d13518cca249d3d3a4b5dac3c88b"
                }
            ],
            "sha": "7a243b5f205a9ed2e74b7a88a16e8d325eed7a82",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/7a243b5f205a9ed2e74b7a88a16e8d325eed7a82"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fbe5993f9723d13518cca249d3d3a4b5dac3c88b/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T14:12:30Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T14:12:30Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "fix: added borders and fixed button position of X",
                "tree": {
                    "sha": "7eec930ff2f2938ae6ef1c17936a489b3e138856",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/7eec930ff2f2938ae6ef1c17936a489b3e138856"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/fbe5993f9723d13518cca249d3d3a4b5dac3c88b",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/fbe5993f9723d13518cca249d3d3a4b5dac3c88b",
            "node_id": "C_kwDOM8WH19oAKGZiZTU5OTNmOTcyM2QxMzUxOGNjYTI0OWQzZDNhNGI1ZGFjM2M4OGI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/f8430c2cfbee7a55555a0c30003b0c701a32e8af",
                    "sha": "f8430c2cfbee7a55555a0c30003b0c701a32e8af",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f8430c2cfbee7a55555a0c30003b0c701a32e8af"
                }
            ],
            "sha": "fbe5993f9723d13518cca249d3d3a4b5dac3c88b",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fbe5993f9723d13518cca249d3d3a4b5dac3c88b"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f8430c2cfbee7a55555a0c30003b0c701a32e8af/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T13:49:28Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T13:49:28Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "fix: Fixed title and spacing of components",
                "tree": {
                    "sha": "69a41e189c4729562883f785681af66a576a12e5",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/69a41e189c4729562883f785681af66a576a12e5"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/f8430c2cfbee7a55555a0c30003b0c701a32e8af",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/f8430c2cfbee7a55555a0c30003b0c701a32e8af",
            "node_id": "C_kwDOM8WH19oAKGY4NDMwYzJjZmJlZTdhNTU1NTVhMGMzMDAwM2IwYzcwMWEzMmU4YWY",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/9a3902cf516c9429a660bbe8be8d523ff99dc9bc",
                    "sha": "9a3902cf516c9429a660bbe8be8d523ff99dc9bc",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/9a3902cf516c9429a660bbe8be8d523ff99dc9bc"
                }
            ],
            "sha": "f8430c2cfbee7a55555a0c30003b0c701a32e8af",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f8430c2cfbee7a55555a0c30003b0c701a32e8af"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/9a3902cf516c9429a660bbe8be8d523ff99dc9bc/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T13:49:11Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T13:49:11Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "feat: Course code appears below the name of subject",
                "tree": {
                    "sha": "ef4f9799167cc22a1e6f433ffbe1be7dd0c8353d",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/ef4f9799167cc22a1e6f433ffbe1be7dd0c8353d"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/9a3902cf516c9429a660bbe8be8d523ff99dc9bc",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/9a3902cf516c9429a660bbe8be8d523ff99dc9bc",
            "node_id": "C_kwDOM8WH19oAKDlhMzkwMmNmNTE2Yzk0MjlhNjYwYmJlOGJlOGQ1MjNmZjk5ZGM5YmM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43",
                    "sha": "d1ec2ff1ccbb7063e811a8372816cd3a5953ab43",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43"
                }
            ],
            "sha": "9a3902cf516c9429a660bbe8be8d523ff99dc9bc",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/9a3902cf516c9429a660bbe8be8d523ff99dc9bc"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T13:25:45Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T13:25:45Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #192 from RohitPhaniramSakamuri/dev\n\nSyllabus name processing",
                "tree": {
                    "sha": "f32cf6a0271c7c9315462b6f72209871b28a5e0a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/f32cf6a0271c7c9315462b6f72209871b28a5e0a"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43",
                "verification": {
                    "payload": "tree f32cf6a0271c7c9315462b6f72209871b28a5e0a\nparent 6a0a108b4a4fc689203c416a6fc27a100990fbae\nparent f22739d82a93ff42bb240ee93cf8406adacdb1ee\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728653145 +0530\ncommitter GitHub <noreply@github.com> 1728653145 +0530\n\nMerge pull request #192 from RohitPhaniramSakamuri/dev\n\nSyllabus name processing",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCSdZCRC1aQ7uu5UhlAAAUOoQAG6X9hHW+2OMWhSJH5Evw56F\nnwHEUHWWNhRi5E5V3oUU5+RHqhbh4zGXmtkT+3ZWVXrXFon/Mu+onWJeWPxIC7OL\nn2x2aCfGEJQwTbNBGfNBt6dQwW3jgK40Hx9PJ2NAsXEtEaCeSOwX4Z4ng+G3umiq\n4MvPjhe6YU0fSC6gfLjlmaIRzGzdJKVv888H000GhDlNJpXylvzRedPFJahHcIVM\nXILlHpXuuaa6oTra4P2H5FvtV1q2QeS/92yoI9C1pw59DLWam9mFrtZq82SaYNoh\npZFb7C1yXBitCErTtHCLnKWchlgq4LnLMAKvR2TsnhdBSLnMil5frDyh3dWFExu3\nYjK0g8ZkZFeDQZGWf5Vj3NF8fQQSRqgLWMrzCDPNU6poyFwdSTODVnUh1tqasM/Y\n6WaZeibqoeKbiE13M0ORn6px9woEv0chxXtpScfO1gAUrSNjYBM3rXuJbFDGMwAc\nKQGnj+k67xiHdwTHKMu0h12BxvHiqMmjfWqiZOtr+UVWgYRbgCtN3OquCfdWj/EG\n18Gm6wHB2SOCmKp6BUIVul5CwBpi3WVHpWQqXiZOtMe+grSIKR0+/hWhGfeu+rEO\nzwoqMCmw1TVGrxVwA/L2um6RzunnTc2osZAuGST0hhBvQD46qjCH3CiF9IcJ4Zt4\nnkCHAjzm+R4D+x4SGfYn\n=XWTY\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43",
            "node_id": "C_kwDOM8WH19oAKGQxZWMyZmYxY2NiYjcwNjNlODExYTgzNzI4MTZjZDNhNTk1M2FiNDM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/6a0a108b4a4fc689203c416a6fc27a100990fbae",
                    "sha": "6a0a108b4a4fc689203c416a6fc27a100990fbae",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6a0a108b4a4fc689203c416a6fc27a100990fbae"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/f22739d82a93ff42bb240ee93cf8406adacdb1ee",
                    "sha": "f22739d82a93ff42bb240ee93cf8406adacdb1ee",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f22739d82a93ff42bb240ee93cf8406adacdb1ee"
                }
            ],
            "sha": "d1ec2ff1ccbb7063e811a8372816cd3a5953ab43",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d1ec2ff1ccbb7063e811a8372816cd3a5953ab43"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f22739d82a93ff42bb240ee93cf8406adacdb1ee/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T13:23:10Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T13:23:10Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "message": "syllabus name processing",
                "tree": {
                    "sha": "f32cf6a0271c7c9315462b6f72209871b28a5e0a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/f32cf6a0271c7c9315462b6f72209871b28a5e0a"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/f22739d82a93ff42bb240ee93cf8406adacdb1ee",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/f22739d82a93ff42bb240ee93cf8406adacdb1ee",
            "node_id": "C_kwDOM8WH19oAKGYyMjczOWQ4MmE5M2ZmNDJiYjI0MGVlOTNjZjg0MDZhZGFjZGIxZWU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/88b170e2e8fb727089f2bf95cdbdaa5dd477b95a",
                    "sha": "88b170e2e8fb727089f2bf95cdbdaa5dd477b95a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/88b170e2e8fb727089f2bf95cdbdaa5dd477b95a"
                }
            ],
            "sha": "f22739d82a93ff42bb240ee93cf8406adacdb1ee",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f22739d82a93ff42bb240ee93cf8406adacdb1ee"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/aaadba2376c1612a756a8d633ae53c9b56abd9fe/comments",
            "commit": {
                "author": {
                    "date": "2024-10-11T06:28:07Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-11T06:28:07Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #191 from ACM-VIT/dev\n\nDev",
                "tree": {
                    "sha": "2ca85fcbcf0a84eea8ec6b3f1280081fc30d00e1",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/2ca85fcbcf0a84eea8ec6b3f1280081fc30d00e1"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/aaadba2376c1612a756a8d633ae53c9b56abd9fe",
                "verification": {
                    "payload": "tree 2ca85fcbcf0a84eea8ec6b3f1280081fc30d00e1\nparent f939441b34d0a63f961845fe0dd360e93d17b6c3\nparent 6a0a108b4a4fc689203c416a6fc27a100990fbae\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728628087 +0530\ncommitter GitHub <noreply@github.com> 1728628087 +0530\n\nMerge pull request #191 from ACM-VIT/dev\n\nDev",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCMV3CRC1aQ7uu5UhlAAA7T0QAD5wTpSKTcVm+Z6HjjH8nUfE\nAvlNvgQl2oekTB/7lEoZB/Q4jx45ygPnV0sg8z7lzwm7ethCScBrDNCDQuKi7jQj\nDPfP9aeHkszpAlhtiEeewEqol2kxkcVCrMkTpMqoQi1qgeludl4y34HXbrql0ksL\nZu5WNFWzO9FHjuPr77BpIp0aoTalY/O5nrBt2RIlaf8i/seSKMWSNUAiLFa1iusa\nD3amI4XpMYf1A36uVXXHTV+sMGdhA86GB8BhWFTdjI4nmdBfmGLkgnHUEOXn33Fa\nFBMIIxOlh7y30+1XM6nhyg3f4j4l7VbCMdvX+ACHbJLd0S++OxKToKJPEmG0pcOT\n24SL7+9K54jVJX/bwIht4FMmmXqq9AWfBbUxKb3pvPwP+CaTEiABpW+sz/OBhtPi\nxkbvy+AqSERDXjKH0+z2bcb+25O+bhzv7wa1yKvN/4lRpSBtMBBLFnYRyolUjqFQ\n5VoF9MWyYSFHmOLT2l/wKLSY0FfdI4aFpLz10pnbv5GXOOQy7oXLQ1CXsjvH3LS1\n3Khcf8Mi5eY9n1bV6nHIwuSSQPjfKolkVzPj4cEINZswO1sg8tmdcS0tS0gz48ac\nQ4pOWJ/FP+mwMlIH84cVveYI+Ylmi0u3aJve0ld9CHT1ulYYCxH9fonC2fUCc8/K\n8slxtGgC01ClXQ7/NwC8\n=Qbnl\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/aaadba2376c1612a756a8d633ae53c9b56abd9fe",
            "node_id": "C_kwDOM8WH19oAKGFhYWRiYTIzNzZjMTYxMmE3NTZhOGQ2MzNhZTUzYzliNTZhYmQ5ZmU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/f939441b34d0a63f961845fe0dd360e93d17b6c3",
                    "sha": "f939441b34d0a63f961845fe0dd360e93d17b6c3",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f939441b34d0a63f961845fe0dd360e93d17b6c3"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/6a0a108b4a4fc689203c416a6fc27a100990fbae",
                    "sha": "6a0a108b4a4fc689203c416a6fc27a100990fbae",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6a0a108b4a4fc689203c416a6fc27a100990fbae"
                }
            ],
            "sha": "aaadba2376c1612a756a8d633ae53c9b56abd9fe",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/aaadba2376c1612a756a8d633ae53c9b56abd9fe"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6a0a108b4a4fc689203c416a6fc27a100990fbae/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T21:13:23Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T21:13:23Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #190 from RohitPhaniramSakamuri/dev\n\nfixed build errors + migration to prod",
                "tree": {
                    "sha": "00a47f5e24de057851505bc8caba73c5a7a6ce32",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/00a47f5e24de057851505bc8caba73c5a7a6ce32"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/6a0a108b4a4fc689203c416a6fc27a100990fbae",
                "verification": {
                    "payload": "tree 00a47f5e24de057851505bc8caba73c5a7a6ce32\nparent 2746c6928ddfafc2914ec43256352d66201307e9\nparent 88b170e2e8fb727089f2bf95cdbdaa5dd477b95a\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728594803 +0530\ncommitter GitHub <noreply@github.com> 1728594803 +0530\n\nMerge pull request #190 from RohitPhaniramSakamuri/dev\n\nfixed build errors + migration to prod",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCENzCRC1aQ7uu5UhlAAAoNsQAAXgLjQADjPj+nKSzIdjvAXd\nyhdOt18GMHrfoDdrZyyA4+kBEoQgQB2NAeWPH5O263B5SF5WVLWiNTvZ8IJt6azg\ncTK0kf838GEPvkzt/i/vRSfVQKCUQj85ER4zDZ09lLyK/m5KiqxpyQ3IdJGC2xMy\nQcg5IVHfDkRjdomq0CG6xa4Ukln0zx/JZLdCJx7pBrgCsmCmzMwu/RF0Tp1uFvvz\nLqzj9UdpvhLne5KTXn+LS2FT7YRGj5HtghkEVRYJHnmppYWNjN/tkb47q6ywsr/6\noB5fcijYEb2fhc6CxihSnEg0v6eh6vKqDarvgf4HNOmQ8TvOSpeOu0Oa6oKAo+nO\nPSaDxR0VOk8b31tijesAtv9d4cwQydEzdJ5HxPWN2L3i7ZExijD1D13O9xUyR9VF\npfX+/3S+VIUwo3RBWnQ8G8WInvaTUo9dhTzlQ/esV0skdWGYd/wtMZEfsgXnoAns\nYK3R9kVMiLw3Ch3ohqxkrmeXGrikiJVvdxcu/OQoFJXqkxZrd9aWbhCyde0KKHcz\njqHa9ePAwe80LR1KzKKFErV6Iz3yfjEyiSU7r0NPtvcYDfm2d+6XBW1q6bmTUAuZ\nDtCIAxAqNT2MofF9W5Gj+OnDsd0Tlf7m0XxGFE4ANST1qAiHoP6g+gFRa0NpglzN\nrzbXR+XkIo5U5L1I2bm3\n=zHmG\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/6a0a108b4a4fc689203c416a6fc27a100990fbae",
            "node_id": "C_kwDOM8WH19oAKDZhMGExMDhiNGE0ZmM2ODkyMDNjNDE2YTZmYzI3YTEwMDk5MGZiYWU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/2746c6928ddfafc2914ec43256352d66201307e9",
                    "sha": "2746c6928ddfafc2914ec43256352d66201307e9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/2746c6928ddfafc2914ec43256352d66201307e9"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/88b170e2e8fb727089f2bf95cdbdaa5dd477b95a",
                    "sha": "88b170e2e8fb727089f2bf95cdbdaa5dd477b95a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/88b170e2e8fb727089f2bf95cdbdaa5dd477b95a"
                }
            ],
            "sha": "6a0a108b4a4fc689203c416a6fc27a100990fbae",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6a0a108b4a4fc689203c416a6fc27a100990fbae"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/88b170e2e8fb727089f2bf95cdbdaa5dd477b95a/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T21:10:02Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T21:10:02Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "message": "fixed build errors + migration to prod",
                "tree": {
                    "sha": "00a47f5e24de057851505bc8caba73c5a7a6ce32",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/00a47f5e24de057851505bc8caba73c5a7a6ce32"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/88b170e2e8fb727089f2bf95cdbdaa5dd477b95a",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/88b170e2e8fb727089f2bf95cdbdaa5dd477b95a",
            "node_id": "C_kwDOM8WH19oAKDg4YjE3MGUyZThmYjcyNzA4OWYyYmY5NWNkYmRhYTVkZDQ3N2I5NWE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/2746c6928ddfafc2914ec43256352d66201307e9",
                    "sha": "2746c6928ddfafc2914ec43256352d66201307e9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/2746c6928ddfafc2914ec43256352d66201307e9"
                }
            ],
            "sha": "88b170e2e8fb727089f2bf95cdbdaa5dd477b95a",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/88b170e2e8fb727089f2bf95cdbdaa5dd477b95a"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f939441b34d0a63f961845fe0dd360e93d17b6c3/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T20:32:32Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T20:32:32Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #189 from ACM-VIT/dev\n\nDev",
                "tree": {
                    "sha": "a8464213971339eab7f6a00444831065c47c7038",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/a8464213971339eab7f6a00444831065c47c7038"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/f939441b34d0a63f961845fe0dd360e93d17b6c3",
                "verification": {
                    "payload": "tree a8464213971339eab7f6a00444831065c47c7038\nparent b2a4efcba77617a2c9bb7bdb86ae68fa2f43cdf3\nparent 2746c6928ddfafc2914ec43256352d66201307e9\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728592352 +0530\ncommitter GitHub <noreply@github.com> 1728592352 +0530\n\nMerge pull request #189 from ACM-VIT/dev\n\nDev",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCDngCRC1aQ7uu5UhlAAAgC4QAA6PloHvgq+qJV3fEQZRBmpx\n6STtxOIy5wviIcAIaI3/vUDkSIXyfljvVIJ0gF0Sxyh9nd6BiXDc3ucrMmC8IZg6\nbnXSOA/GG74+9RwJq7HbYmDXvHLnmR+80zLV8eZ2yuqJXtc6zIJeQrfHCc5lkQ5t\n0bhX9bPBtmHfhpLGra+QX+Kjl/gLDDn28cUxn4FA5ScwiNTcyAPZO1tvy0sI+Lom\nvnDSb/bBOW1Da71iB50XQZOeiSBRvsZLHhwR9nlcbjn1w2C/wTBoyWrShewBqplf\nSDrL3ihhNXn8UTei6oW9Fj5Y0dQyqwkiy1JaZGcgs9+b7gWJMkBDhwRsRi8cnnlf\nL4OM7hZVhUoPwDg51Ft1cEwLsvkINhpMO3KryHAY7zz2vkTI9EPSEbOO9HnPB1di\nvSoxCkKRx7cYIUTteBPvvmhYDbV3cxCpEv3WvSbCX67jn453jxn2GlTGncdi3YEi\nzYTghBAojuWoxXGiLc+nWndSbBQA3A+IZS3C97X1SGxr4SddU8uHNc0BaLgZZsI2\neRRD6c6BDnxfDvchBOLAkVIGcr2xJBL3Nbf7NRseY8+Beji4rbi7ehUpb8pEWR/g\nKaiYkD42x6E4xuPPlj6dDrZHT99ITWU+A8KKvnrWqemNXvMVI9tMXdt2cwFSbyK9\nl+mEOab2Jo3en1/KOpJX\n=JoLu\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/f939441b34d0a63f961845fe0dd360e93d17b6c3",
            "node_id": "C_kwDOM8WH19oAKGY5Mzk0NDFiMzRkMGE2M2Y5NjE4NDVmZTBkZDM2MGU5M2QxN2I2YzM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/b2a4efcba77617a2c9bb7bdb86ae68fa2f43cdf3",
                    "sha": "b2a4efcba77617a2c9bb7bdb86ae68fa2f43cdf3",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b2a4efcba77617a2c9bb7bdb86ae68fa2f43cdf3"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/2746c6928ddfafc2914ec43256352d66201307e9",
                    "sha": "2746c6928ddfafc2914ec43256352d66201307e9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/2746c6928ddfafc2914ec43256352d66201307e9"
                }
            ],
            "sha": "f939441b34d0a63f961845fe0dd360e93d17b6c3",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/f939441b34d0a63f961845fe0dd360e93d17b6c3"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/2746c6928ddfafc2914ec43256352d66201307e9/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T20:16:05Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T20:16:05Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #188 from bhatiyavansh/dev\n\nFix: made design changes and added responsiveness for all screen sizes",
                "tree": {
                    "sha": "bdd58cfc0fe20fa82809e05e2e19bcdb58129f99",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/bdd58cfc0fe20fa82809e05e2e19bcdb58129f99"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/2746c6928ddfafc2914ec43256352d66201307e9",
                "verification": {
                    "payload": "tree bdd58cfc0fe20fa82809e05e2e19bcdb58129f99\nparent 0ca33e1aecb86fedd6da97e5db073fadaae96158\nparent 03577f89741d10ca14a861e5f27fbb657c04100a\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728591365 +0530\ncommitter GitHub <noreply@github.com> 1728591365 +0530\n\nMerge pull request #188 from bhatiyavansh/dev\n\nFix: made design changes and added responsiveness for all screen sizes",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCDYFCRC1aQ7uu5UhlAAAPMsQAGh5aoigNNEHh9+J7yIcan4T\n0VHTE99WbnwJl3+24wt2GkqGcaUdjw9vAvZ/ESLtzaHUz4EEGy9g3NGWAEAkrLnN\nl496Riq9dfrn0C4ZHaYOKwWjd1rlsIGFSyvz39e8mPXU5xUIEJLU4WjG2/JQue85\nOQWPGtxrD40q/eZjhjVY1KO3kiutd8PrJlrR6fbWDGe4SvocsSsgfRpwj3UkiZBy\nR8AJU+MQ5FdoWdJCoLREO1xwGZcmdsIeH5Zt5iZPg0QKD/eex/fWUNMOYyR/CQEA\njffVZv4MG6QipGe/7UqEGl4/IBGZyif5znf9VMZcJK9lfWUUmmdTJPeo+sKRbqKu\nM6Rt8xqmoJ4p7Cm5M/ND+5ZWoStWqJ8WOJurLA0UUnwZILivhtWLrkd5/2RGWex9\nQPyaOd1oAm93y807vnAvk4CW4ewv3ntUk90SuooV1FHWz7wwGESyoHthZ6FwC9Ws\nz1Etz6OrJ2l0Uy7Yz4HWtwlmlR5i3ybzIHdZR6kK8ZNRA7D2z9I5AlDksF0S4dlj\n3MNmdnopnBL9qR7FG/HKp9u4qXLuYlkIH99kv1Du4WAT+R/pc0HHVm3rv0IH2PoV\nHXFnVN1xQde71m7TUbuH1BzlrEiAivrC+ZuiB656S+FCnx0tNjKqSoPKcT47J/R3\ngeJglKZqh93w1R1Xc53w\n=a52N\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/2746c6928ddfafc2914ec43256352d66201307e9",
            "node_id": "C_kwDOM8WH19oAKDI3NDZjNjkyOGRkZmFmYzI5MTRlYzQzMjU2MzUyZDY2MjAxMzA3ZTk",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/0ca33e1aecb86fedd6da97e5db073fadaae96158",
                    "sha": "0ca33e1aecb86fedd6da97e5db073fadaae96158",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/0ca33e1aecb86fedd6da97e5db073fadaae96158"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/03577f89741d10ca14a861e5f27fbb657c04100a",
                    "sha": "03577f89741d10ca14a861e5f27fbb657c04100a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/03577f89741d10ca14a861e5f27fbb657c04100a"
                }
            ],
            "sha": "2746c6928ddfafc2914ec43256352d66201307e9",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/2746c6928ddfafc2914ec43256352d66201307e9"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/0ca33e1aecb86fedd6da97e5db073fadaae96158/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T19:08:20Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T19:08:20Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #187 from SarupaVL/dev\n\nSyllabus Route",
                "tree": {
                    "sha": "38196612659a5c94e38455612d2ea0b4c5dca5fc",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/38196612659a5c94e38455612d2ea0b4c5dca5fc"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/0ca33e1aecb86fedd6da97e5db073fadaae96158",
                "verification": {
                    "payload": "tree 38196612659a5c94e38455612d2ea0b4c5dca5fc\nparent 376a65d159beeb5b49928268cd65b4c8f93aa853\nparent 8686c783acf6e3b61d0fd5b513a5a7cb0f03b3e6\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728587300 +0530\ncommitter GitHub <noreply@github.com> 1728587300 +0530\n\nMerge pull request #187 from SarupaVL/dev\n\nSyllabus Route",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCCYkCRC1aQ7uu5UhlAAAwmQQAAcVTmyHkc2skhXQQD5OUr+F\n0DJ2YuqiNBdgYdG6fr643Q1oZAwivyx5Egr8LmsxntJjMzhlgqF50UO2YIjiqK4e\nyOo1Lz9m/XDPmMfqdvQwaUgETv8DbwPngFCtCTo0lcBzql9NdLCSH3tpmJ5PXa7e\nq4jTpnU1i6iVX5qXN1EW6QCt7t0btkVWZzDxluepOqvGA7fTwk9NyFnu8XJVKYSU\nmYAeYGbFu4Xfjf3FfBqsE5qkk01jluJIf0LARopVOPZ8EsRekSQpyoVATJyMQWPD\n77JSbChAQeXfCrS9tnJa4G0Nvw6RMRZ7CAovkH/8oKeR0ZzGcTmDirmV8wvAlwfO\nAfGGeaKogdVJKRysOAwuKNM9zrIZP3VLk8v0NZ1WEgOYqPJx/vJB3VnL6fXwxpjz\nSacHYEeMyTERIo7njJM8HxOi8Qf6WfCrmenvRzWxhV7AmXp1/+W0Pv1C4/C4uhw+\nUArzlMAcfy9faCzqQHKuaSJSQPYs1yEXJlG5UzoLvAIC8sjaDPuqcard0U6821Mf\nTJ5/IX24KTFar4+/2Fe5NRZP4a6VGU1jjD3ZZNJLmY1KAW/lPk3q7tMMQTf/hhqp\nAP4NgcZzEUmY0WzaA9nYoLEwk4r0KYvnBIhL2k531MmYIxFVmwtocNcPPLnz7PWw\nwGDpn/l3TIzNPAdUBPZf\n=oB5M\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/0ca33e1aecb86fedd6da97e5db073fadaae96158",
            "node_id": "C_kwDOM8WH19oAKDBjYTMzZTFhZWNiODZmZWRkNmRhOTdlNWRiMDczZmFkYWFlOTYxNTg",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/376a65d159beeb5b49928268cd65b4c8f93aa853",
                    "sha": "376a65d159beeb5b49928268cd65b4c8f93aa853",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/376a65d159beeb5b49928268cd65b4c8f93aa853"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/8686c783acf6e3b61d0fd5b513a5a7cb0f03b3e6",
                    "sha": "8686c783acf6e3b61d0fd5b513a5a7cb0f03b3e6",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8686c783acf6e3b61d0fd5b513a5a7cb0f03b3e6"
                }
            ],
            "sha": "0ca33e1aecb86fedd6da97e5db073fadaae96158",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/0ca33e1aecb86fedd6da97e5db073fadaae96158"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/376a65d159beeb5b49928268cd65b4c8f93aa853/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T19:07:56Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T19:07:56Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #186 from RohitPhaniramSakamuri/dev\n\n\"MIGRATIONS\"",
                "tree": {
                    "sha": "aecf9a379e20415442f38958332fb9b6bdfeaf42",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/aecf9a379e20415442f38958332fb9b6bdfeaf42"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/376a65d159beeb5b49928268cd65b4c8f93aa853",
                "verification": {
                    "payload": "tree aecf9a379e20415442f38958332fb9b6bdfeaf42\nparent d76a4537af2a74d841b6687130e59dadc09223c9\nparent eb686f3182b2d585b2f20a26932ff72959bd1cc1\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728587276 +0530\ncommitter GitHub <noreply@github.com> 1728587276 +0530\n\nMerge pull request #186 from RohitPhaniramSakamuri/dev\n\n\"MIGRATIONS\"",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCCYNCRC1aQ7uu5UhlAAAmpUQAG+9bmYyH+Fqzn94tXENHIGy\nXYqdSmzaktIHDwqmRkJLfqtM/aa5q0Ru9d594hdCrn+FF+3xdhWZ/xXP9TBzd9vs\n2Pn/1cbwJjbcU6j/zdkjUIeV5iJTiuhNEso7VgfLK0oKW1cE3PZ1jT54JkEWYum8\nZm82iyZEHXFgYWLYobWLZ8nMg1vQz3WjaXYHTMTP/PV2NYobT93ucuxtv84QQ9UX\nQEc4JQWIKIA2Xm6DAR9lnccokB2Jo8W/7om7htjY5hK0oWcYpQYNQiCoRSo9xFXy\nbATkzQ0OPlQBuXFq0gUc70fp2EZkSSVDYiyysII6PcG/86Ne7y0Zc6xz2pdG/bKF\nr8Rmuq+pub1yVim1/MACQPKvb2FJWMAZCAfIrB8hFXQOIKNsDQJ57i/dOVx+rzc7\nAbVQN2ecIcn7zqgrBa2RJKSQiujs37wTX8pGos3cxfVhSd5pjvM+lLbjEubBU7OF\nqpAn98foU0HHZ1MGi/8RwH6ealrRbsEwbuZsE8y2glkGNxItG0rqZnPsxVhM7qPw\ngwHbxNt38ZhUqSBO+fesc1QqIxjAU8sj4EYFTx3iQ8iPt5Jh+jDS7ycnruAj5JOW\nJV/EAJWXlEqgMHKqFXw8ISaB0YlH/4muqpayGvzA9wvsz59kQ6wUr8Wo1nFWifFC\nF8BUucoXNAS9bAylTd3U\n=6QqF\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/376a65d159beeb5b49928268cd65b4c8f93aa853",
            "node_id": "C_kwDOM8WH19oAKDM3NmE2NWQxNTliZWViNWI0OTkyODI2OGNkNjViNGM4ZjkzYWE4NTM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d76a4537af2a74d841b6687130e59dadc09223c9",
                    "sha": "d76a4537af2a74d841b6687130e59dadc09223c9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d76a4537af2a74d841b6687130e59dadc09223c9"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/eb686f3182b2d585b2f20a26932ff72959bd1cc1",
                    "sha": "eb686f3182b2d585b2f20a26932ff72959bd1cc1",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/eb686f3182b2d585b2f20a26932ff72959bd1cc1"
                }
            ],
            "sha": "376a65d159beeb5b49928268cd65b4c8f93aa853",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/376a65d159beeb5b49928268cd65b4c8f93aa853"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/64310381?v=4",
                "events_url": "https://api.github.com/users/bhatiyavansh/events{/privacy}",
                "followers_url": "https://api.github.com/users/bhatiyavansh/followers",
                "following_url": "https://api.github.com/users/bhatiyavansh/following{/other_user}",
                "gists_url": "https://api.github.com/users/bhatiyavansh/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/bhatiyavansh",
                "id": 64310381,
                "login": "bhatiyavansh",
                "node_id": "MDQ6VXNlcjY0MzEwMzgx",
                "organizations_url": "https://api.github.com/users/bhatiyavansh/orgs",
                "received_events_url": "https://api.github.com/users/bhatiyavansh/received_events",
                "repos_url": "https://api.github.com/users/bhatiyavansh/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/bhatiyavansh/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bhatiyavansh/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/bhatiyavansh",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/03577f89741d10ca14a861e5f27fbb657c04100a/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T19:00:13Z",
                    "email": "bhatiyavansh@gmail.com",
                    "name": "bhatiyavansh"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T19:00:13Z",
                    "email": "bhatiyavansh@gmail.com",
                    "name": "bhatiyavansh"
                },
                "message": "made design changes and added responsiveness for all screen sizes",
                "tree": {
                    "sha": "048e542d9703dd87f2a4130640585dea61d0a21c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/048e542d9703dd87f2a4130640585dea61d0a21c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/03577f89741d10ca14a861e5f27fbb657c04100a",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/64310381?v=4",
                "events_url": "https://api.github.com/users/bhatiyavansh/events{/privacy}",
                "followers_url": "https://api.github.com/users/bhatiyavansh/followers",
                "following_url": "https://api.github.com/users/bhatiyavansh/following{/other_user}",
                "gists_url": "https://api.github.com/users/bhatiyavansh/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/bhatiyavansh",
                "id": 64310381,
                "login": "bhatiyavansh",
                "node_id": "MDQ6VXNlcjY0MzEwMzgx",
                "organizations_url": "https://api.github.com/users/bhatiyavansh/orgs",
                "received_events_url": "https://api.github.com/users/bhatiyavansh/received_events",
                "repos_url": "https://api.github.com/users/bhatiyavansh/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/bhatiyavansh/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bhatiyavansh/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/bhatiyavansh",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/03577f89741d10ca14a861e5f27fbb657c04100a",
            "node_id": "C_kwDOM8WH19oAKDAzNTc3Zjg5NzQxZDEwY2ExNGE4NjFlNWYyN2ZiYjY1N2MwNDEwMGE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d76a4537af2a74d841b6687130e59dadc09223c9",
                    "sha": "d76a4537af2a74d841b6687130e59dadc09223c9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d76a4537af2a74d841b6687130e59dadc09223c9"
                }
            ],
            "sha": "03577f89741d10ca14a861e5f27fbb657c04100a",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/03577f89741d10ca14a861e5f27fbb657c04100a"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/145839268?v=4",
                "events_url": "https://api.github.com/users/SarupaVL/events{/privacy}",
                "followers_url": "https://api.github.com/users/SarupaVL/followers",
                "following_url": "https://api.github.com/users/SarupaVL/following{/other_user}",
                "gists_url": "https://api.github.com/users/SarupaVL/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/SarupaVL",
                "id": 145839268,
                "login": "SarupaVL",
                "node_id": "U_kgDOCLFUpA",
                "organizations_url": "https://api.github.com/users/SarupaVL/orgs",
                "received_events_url": "https://api.github.com/users/SarupaVL/received_events",
                "repos_url": "https://api.github.com/users/SarupaVL/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/SarupaVL/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/SarupaVL/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/SarupaVL",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8686c783acf6e3b61d0fd5b513a5a7cb0f03b3e6/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T17:45:23Z",
                    "email": "lakshmisarupa@gmail.com",
                    "name": "SarupaVL"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T17:45:23Z",
                    "email": "lakshmisarupa@gmail.com",
                    "name": "SarupaVL"
                },
                "message": "Merge branch 'dev' of https://github.com/SarupaVL/ExamCooker-2024--Sarupa into dev",
                "tree": {
                    "sha": "585edc20af63d92829adc44c7a2f5ec5b613069b",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/585edc20af63d92829adc44c7a2f5ec5b613069b"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/8686c783acf6e3b61d0fd5b513a5a7cb0f03b3e6",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/145839268?v=4",
                "events_url": "https://api.github.com/users/SarupaVL/events{/privacy}",
                "followers_url": "https://api.github.com/users/SarupaVL/followers",
                "following_url": "https://api.github.com/users/SarupaVL/following{/other_user}",
                "gists_url": "https://api.github.com/users/SarupaVL/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/SarupaVL",
                "id": 145839268,
                "login": "SarupaVL",
                "node_id": "U_kgDOCLFUpA",
                "organizations_url": "https://api.github.com/users/SarupaVL/orgs",
                "received_events_url": "https://api.github.com/users/SarupaVL/received_events",
                "repos_url": "https://api.github.com/users/SarupaVL/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/SarupaVL/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/SarupaVL/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/SarupaVL",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/8686c783acf6e3b61d0fd5b513a5a7cb0f03b3e6",
            "node_id": "C_kwDOM8WH19oAKDg2ODZjNzgzYWNmNmUzYjYxZDBmZDViNTEzYTVhN2NiMGYwM2IzZTY",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/e5dd0ef332e68be83521127926529b9340fc86f6",
                    "sha": "e5dd0ef332e68be83521127926529b9340fc86f6",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/e5dd0ef332e68be83521127926529b9340fc86f6"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d76a4537af2a74d841b6687130e59dadc09223c9",
                    "sha": "d76a4537af2a74d841b6687130e59dadc09223c9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d76a4537af2a74d841b6687130e59dadc09223c9"
                }
            ],
            "sha": "8686c783acf6e3b61d0fd5b513a5a7cb0f03b3e6",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8686c783acf6e3b61d0fd5b513a5a7cb0f03b3e6"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/eb686f3182b2d585b2f20a26932ff72959bd1cc1/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T17:28:42Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T17:28:42Z",
                    "email": "rpsakamurii@gmail.com",
                    "name": "RohitPhaniramSakamuri"
                },
                "message": "\"MIGRATIONS\"",
                "tree": {
                    "sha": "aecf9a379e20415442f38958332fb9b6bdfeaf42",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/aecf9a379e20415442f38958332fb9b6bdfeaf42"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/eb686f3182b2d585b2f20a26932ff72959bd1cc1",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/eb686f3182b2d585b2f20a26932ff72959bd1cc1",
            "node_id": "C_kwDOM8WH19oAKGViNjg2ZjMxODJiMmQ1ODViMmYyMGEyNjkzMmZmNzI5NTliZDFjYzE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d76a4537af2a74d841b6687130e59dadc09223c9",
                    "sha": "d76a4537af2a74d841b6687130e59dadc09223c9",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d76a4537af2a74d841b6687130e59dadc09223c9"
                }
            ],
            "sha": "eb686f3182b2d585b2f20a26932ff72959bd1cc1",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/eb686f3182b2d585b2f20a26932ff72959bd1cc1"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/145839268?v=4",
                "events_url": "https://api.github.com/users/SarupaVL/events{/privacy}",
                "followers_url": "https://api.github.com/users/SarupaVL/followers",
                "following_url": "https://api.github.com/users/SarupaVL/following{/other_user}",
                "gists_url": "https://api.github.com/users/SarupaVL/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/SarupaVL",
                "id": 145839268,
                "login": "SarupaVL",
                "node_id": "U_kgDOCLFUpA",
                "organizations_url": "https://api.github.com/users/SarupaVL/orgs",
                "received_events_url": "https://api.github.com/users/SarupaVL/received_events",
                "repos_url": "https://api.github.com/users/SarupaVL/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/SarupaVL/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/SarupaVL/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/SarupaVL",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/e5dd0ef332e68be83521127926529b9340fc86f6/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T17:18:43Z",
                    "email": "lakshmisarupa@gmail.com",
                    "name": "SarupaVL"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T17:18:43Z",
                    "email": "lakshmisarupa@gmail.com",
                    "name": "SarupaVL"
                },
                "message": "fix: fixed syllabus page responsiveness",
                "tree": {
                    "sha": "892eb3468ba84b1d6f4d6d2780f4e945305da167",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/892eb3468ba84b1d6f4d6d2780f4e945305da167"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/e5dd0ef332e68be83521127926529b9340fc86f6",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/145839268?v=4",
                "events_url": "https://api.github.com/users/SarupaVL/events{/privacy}",
                "followers_url": "https://api.github.com/users/SarupaVL/followers",
                "following_url": "https://api.github.com/users/SarupaVL/following{/other_user}",
                "gists_url": "https://api.github.com/users/SarupaVL/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/SarupaVL",
                "id": 145839268,
                "login": "SarupaVL",
                "node_id": "U_kgDOCLFUpA",
                "organizations_url": "https://api.github.com/users/SarupaVL/orgs",
                "received_events_url": "https://api.github.com/users/SarupaVL/received_events",
                "repos_url": "https://api.github.com/users/SarupaVL/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/SarupaVL/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/SarupaVL/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/SarupaVL",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/e5dd0ef332e68be83521127926529b9340fc86f6",
            "node_id": "C_kwDOM8WH19oAKGU1ZGQwZWYzMzJlNjhiZTgzNTIxMTI3OTI2NTI5YjkzNDBmYzg2ZjY",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/b59bf221e973f32cba54a1317507683733901075",
                    "sha": "b59bf221e973f32cba54a1317507683733901075",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b59bf221e973f32cba54a1317507683733901075"
                }
            ],
            "sha": "e5dd0ef332e68be83521127926529b9340fc86f6",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/e5dd0ef332e68be83521127926529b9340fc86f6"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d76a4537af2a74d841b6687130e59dadc09223c9/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T16:42:24Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T16:42:24Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #184 from mahendra785/dev\n\nfix : pdfviewer on full screen",
                "tree": {
                    "sha": "8390ae44e3f55179a5461b8a5fd6ef240b64ad89",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/8390ae44e3f55179a5461b8a5fd6ef240b64ad89"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/d76a4537af2a74d841b6687130e59dadc09223c9",
                "verification": {
                    "payload": "tree 8390ae44e3f55179a5461b8a5fd6ef240b64ad89\nparent fc33a065b3e0aa93eb1b293c39f5c210b9a74724\nparent a8f519471034c52e638092bed9357ef265d72c5c\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728578544 +0530\ncommitter GitHub <noreply@github.com> 1728578544 +0530\n\nMerge pull request #184 from mahendra785/dev\n\nfix : pdfviewer on full screen",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnCAPwCRC1aQ7uu5UhlAAA5bUQAFRkgeZ8AShDZK5MqKCeRCGX\nj45oF+MeBrzod7BeyH+h5okLcQiekB0ExhErYtS1S/lvryWCuLlMSacp0Gs6DoKJ\nnLxn0t036u0BeZboLds9OlRjwecDRya5JborL9bu1DVS4mMe+bvpYP0pUnL+z+QR\nTykavjio3+yfxoNQH+pz+Yqa8FdX20GlZHH7Qt571LB8k02a6eimTe0jidhApVKr\nfV22m6tlZb+3vAPCVV/a+hgHqs6fcvv5ramix5FB8tIngr/dzdsPAxv7gEZjykrd\n7O9gGE3/aeWFXorbX3SGA5HNmyrm47Onvm8xIJeq+4RcSHd0sLUlEp/G6XhJzgD5\npExnfP7p7PK04Bc0oImVNQpP66Zp1WvlWIu9VNGeuVFeMbsinDM84WiH20lTRXM8\nPg8psy/yRQftETpbGZH+9CVk6rYJonRJSjdrIiSiX9kZ4D1brOxn6ixDkR2T07Tm\nksO4+xSLHS+N6400jnTwwnK2eDnv4d53dTYo5bPRbHj2dEtU4CXHbxHDzMeAsuN6\nGhLynLFWr5zB7E6fw2WW+VkI26991/UKUx7IgcW8N+Jf5F3JXkC2S8Cq+cOmpd39\n+F7Ps+anNBwegMTUIMVO3aBeEJGrMnTLZDkFKhFxygk/ChBVB/KEMFsqH1owzAnG\nDMH/gUlpVeysZ+2dNLt4\n=BQau\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/d76a4537af2a74d841b6687130e59dadc09223c9",
            "node_id": "C_kwDOM8WH19oAKGQ3NmE0NTM3YWYyYTc0ZDg0MWI2Njg3MTMwZTU5ZGFkYzA5MjIzYzk",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/fc33a065b3e0aa93eb1b293c39f5c210b9a74724",
                    "sha": "fc33a065b3e0aa93eb1b293c39f5c210b9a74724",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fc33a065b3e0aa93eb1b293c39f5c210b9a74724"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/a8f519471034c52e638092bed9357ef265d72c5c",
                    "sha": "a8f519471034c52e638092bed9357ef265d72c5c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a8f519471034c52e638092bed9357ef265d72c5c"
                }
            ],
            "sha": "d76a4537af2a74d841b6687130e59dadc09223c9",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d76a4537af2a74d841b6687130e59dadc09223c9"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fc33a065b3e0aa93eb1b293c39f5c210b9a74724/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T16:00:21Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T16:00:21Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #178 from RohitPhaniramSakamuri/dev\n\nfeat: Mod edit file name",
                "tree": {
                    "sha": "be38cc984abf1ac71fac1d492da6a8617bfdacce",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/be38cc984abf1ac71fac1d492da6a8617bfdacce"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/fc33a065b3e0aa93eb1b293c39f5c210b9a74724",
                "verification": {
                    "payload": "tree be38cc984abf1ac71fac1d492da6a8617bfdacce\nparent 8ad39982098de32fd9415af0d962fb5cfb454dc2\nparent d96c3d3582404418495ae9831289bccf2e2b0151\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728576021 +0530\ncommitter GitHub <noreply@github.com> 1728576021 +0530\n\nMerge pull request #178 from RohitPhaniramSakamuri/dev\n\nfeat: Mod edit file name",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnB/oVCRC1aQ7uu5UhlAAAQzQQABF+tPoPZjxaT8tK4OTeELQe\nc2j7eaNnS/27PxYJONAU9r208yxFMo3eUXJi82thKdcxi5dXuDqAZQbEJ3msDbTo\nerDeJpAjoe1M9dVAhKRFEVlc37PPOzL0eH/b1llczWd5U/8IjPZrVBLufo4tCgUf\nT4CqLpLgpuU1IML8N/tsX6dwDFwBboJLFw8+tLQN6DoBSWFbKYvVACI5FrXCP2yC\nDh4gV2CLngkt5/jtuyPd0aSMSdysyCpcYTBgP/T9ABnu8B7okFMgSdsg9Hviehvj\nOC19jXFJHQK3DfjJPdgA1pKlvwucaVQIAPZ8AW0zKY6VC5AK3RuDK0EQmcUp9D0G\nTBwYxnl7Tztx/qDmyP378VnVgoBkI9akQhxGwfx4PvvBIV1/ONxD0zDV0uF6GQF/\nz+IBCzIDXave3zqWjXtOiBSgvB5LhXLBRTQ0ftCJp/r6UXH1pbj36UoG9O31SNaT\neJBKKkEc3adbmguMbb2xJgYo97Vgx3Ra1Ym228ONA1XNr2Wc0m/tTSChtzxYkmuH\nx38F3JmmuEmmQ5gFSXVA/OAwxDUcIiEktuyVoBpv+UqImficIT+SQ9cc8EQc9ao/\nztdV0SFyeAj/nd8y6lEV7ZYwJpcs3Rn/1ZBv86dNjXdj/KumQgBMZqtgl67REv9L\nj2hDvh+xYiWE++IokfkS\n=V80y\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/fc33a065b3e0aa93eb1b293c39f5c210b9a74724",
            "node_id": "C_kwDOM8WH19oAKGZjMzNhMDY1YjNlMGFhOTNlYjFiMjkzYzM5ZjVjMjEwYjlhNzQ3MjQ",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/8ad39982098de32fd9415af0d962fb5cfb454dc2",
                    "sha": "8ad39982098de32fd9415af0d962fb5cfb454dc2",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8ad39982098de32fd9415af0d962fb5cfb454dc2"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/d96c3d3582404418495ae9831289bccf2e2b0151",
                    "sha": "d96c3d3582404418495ae9831289bccf2e2b0151",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d96c3d3582404418495ae9831289bccf2e2b0151"
                }
            ],
            "sha": "fc33a065b3e0aa93eb1b293c39f5c210b9a74724",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fc33a065b3e0aa93eb1b293c39f5c210b9a74724"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8ad39982098de32fd9415af0d962fb5cfb454dc2/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T15:59:42Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T15:59:42Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #183 from bhatiyavansh/dev\n\nFeat: Added ToDo List",
                "tree": {
                    "sha": "b723fc2a1d143114a11d4ec9cb4c5107fae63732",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/b723fc2a1d143114a11d4ec9cb4c5107fae63732"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/8ad39982098de32fd9415af0d962fb5cfb454dc2",
                "verification": {
                    "payload": "tree b723fc2a1d143114a11d4ec9cb4c5107fae63732\nparent b92ef9bc5d724427c3304ccea9f5a82660847862\nparent 4d09b393b14ed66ff7e92681cd9d033b84cfc5a3\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728575982 +0530\ncommitter GitHub <noreply@github.com> 1728575982 +0530\n\nMerge pull request #183 from bhatiyavansh/dev\n\nFeat: Added ToDo List",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnB/nuCRC1aQ7uu5UhlAAAojkQAFDccNRH5l+vpFt31iCCaQ4E\nlrwCP5kpk/EvchJhiaGP8BSSIMGLpn5BOTzw9u+99EOFQ1BX7G2ZJFQLHOo41UGO\nBJgw1ZG1dHKBnuwP+o357IiCfaTY55UULBC9aSlwqRwQ9KCKOqVmRf/Pv+ciniTv\nIm1+XSFQHnjPdnZI8B7QHB2LQ/cuoFD6cYopcyPGJSPQWl/YPpgSJdW3IagJgoVe\np1BX3cj9szSf66EZXfk8uuNBSG6MjkWemOArQnNWM03vAZct+mAxAGBl3xmfyhiN\niAKPc9sn8e54dHIfngfpTaEq/Wz+k6ZkOUn50Yc1JjJ+w/iS+J3vuj0NRb3DFavb\ns5GKTTJf1SLMCoiu7rut3PYw9/oPOjQQviurgKswRi0hPB9LciNCaDW9khmm+uLz\n1FM6MY8m9guuY4hEeHMTnwaA8CC6kw1ohGoEE+4LnUqdkYrOSfC7ee+TO6ilp/Tc\nGXGJOM3CdZbPDeX1Dn0ICK/CT69XS/w3Tt/VSW+j7eAizJSC3wRll+5u42mgONob\nVUDb5uQQffHcxRqsclTQLUmp4YuLMjDN1of0xgSMCB9oFJN9+VsTLDQ+otZfMMEg\n+fW4B8a5scjCUoyeXUAQkp9t3dMDcffPbmpHilRHiJfNpW+vy+BjXwmsPYhU/VK3\n3l5Hwov6hGE+j7PIB3X6\n=H0OJ\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/8ad39982098de32fd9415af0d962fb5cfb454dc2",
            "node_id": "C_kwDOM8WH19oAKDhhZDM5OTgyMDk4ZGUzMmZkOTQxNWFmMGQ5NjJmYjVjZmI0NTRkYzI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/b92ef9bc5d724427c3304ccea9f5a82660847862",
                    "sha": "b92ef9bc5d724427c3304ccea9f5a82660847862",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b92ef9bc5d724427c3304ccea9f5a82660847862"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/4d09b393b14ed66ff7e92681cd9d033b84cfc5a3",
                    "sha": "4d09b393b14ed66ff7e92681cd9d033b84cfc5a3",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4d09b393b14ed66ff7e92681cd9d033b84cfc5a3"
                }
            ],
            "sha": "8ad39982098de32fd9415af0d962fb5cfb454dc2",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8ad39982098de32fd9415af0d962fb5cfb454dc2"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b92ef9bc5d724427c3304ccea9f5a82660847862/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T15:56:37Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T15:56:37Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #185 from SarupaVL/dev\n\nfeat: Syllabus Page",
                "tree": {
                    "sha": "00cfa5ca0fdb4cf526b705ef3ee4fc601dea61d1",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/00cfa5ca0fdb4cf526b705ef3ee4fc601dea61d1"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/b92ef9bc5d724427c3304ccea9f5a82660847862",
                "verification": {
                    "payload": "tree 00cfa5ca0fdb4cf526b705ef3ee4fc601dea61d1\nparent 5659815efe58593409724ce91357ba4ca1955489\nparent b59bf221e973f32cba54a1317507683733901075\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728575797 +0530\ncommitter GitHub <noreply@github.com> 1728575797 +0530\n\nMerge pull request #185 from SarupaVL/dev\n\nfeat: Syllabus Page",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnB/k1CRC1aQ7uu5UhlAAAQy0QACbbhiuyG/5GyjErxctg9bof\nuY+HLx/62+6Hy8IhSDIxV6GHhpJdOQdqxQ4zX3ooDPgDAXruweRrNzhQJKhnroJP\n71VwWGxthFd1wVjjNOSNXPo13EL3h9EQ3VNlOo/NYLG/VGaVi+qmzOwKdliOedHw\n4SPAg8WR4MYV1viSZXi+2HGdgIF/ijqM84wyblyLmxC2qK4lTsKDbmIMoW40ts68\nyB/Kh+ezs8z7tWSInnVGvbJZ3iKPiKvpx3f42EQyh/SNMom8ezdxtqSs/tUawnDn\n9xdMiw9bs2+vGBZICkf2Pmm7CTG4VuHKm1sIExu+EBQmPG4BoQQdqCh7bQsAjvhs\nXUaZDiwR5igayS9iA9mCeqRrG52qH4w/uVbu8dGbZXcY00V/+RLY/6309AS2oOB0\n0D8n+SaepazQiAieS5jTJO5ceqngGbw2IjqquOJwPFgPePLrl5ByqMOVofdJJzCV\n/WtxiCfbgby67o++saCIxDRGZqxkeGUB0Wr1QvEwszJmhV3xivZSrfIy55KnW08I\nKkMkbLXyGjQOiGTp9l0fSMqw5KDpVsT5KnOUC37X6GAncCgkVDXSdR3j88/YUEom\nNYdV+agyGQDTtGZ1AdddyvaCVp5u04UfXug5jPPwbqiSqTyKvOayDYHr2ISa+fSO\nJyucL0X3fKwrpeacuA76\n=7Fw3\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/b92ef9bc5d724427c3304ccea9f5a82660847862",
            "node_id": "C_kwDOM8WH19oAKGI5MmVmOWJjNWQ3MjQ0MjdjMzMwNGNjZWE5ZjVhODI2NjA4NDc4NjI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/5659815efe58593409724ce91357ba4ca1955489",
                    "sha": "5659815efe58593409724ce91357ba4ca1955489",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5659815efe58593409724ce91357ba4ca1955489"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/b59bf221e973f32cba54a1317507683733901075",
                    "sha": "b59bf221e973f32cba54a1317507683733901075",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b59bf221e973f32cba54a1317507683733901075"
                }
            ],
            "sha": "b92ef9bc5d724427c3304ccea9f5a82660847862",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b92ef9bc5d724427c3304ccea9f5a82660847862"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
                "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
                "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
                "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
                "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/RohitPhaniramSakamuri",
                "id": 148008559,
                "login": "RohitPhaniramSakamuri",
                "node_id": "U_kgDOCNJubw",
                "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
                "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
                "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/RohitPhaniramSakamuri",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d96c3d3582404418495ae9831289bccf2e2b0151/comments",
            "commit": {
                "author": {
                    "date": "2024-10-10T10:03:59Z",
                    "email": "148008559+RohitPhaniramSakamuri@users.noreply.github.com",
                    "name": "Rohit Phaniram Sakamuri"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-10T10:03:59Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge branch 'dev' into dev",
                "tree": {
                    "sha": "016ef2741f43f02d116f2863a82ddc656b6b051f",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/016ef2741f43f02d116f2863a82ddc656b6b051f"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/d96c3d3582404418495ae9831289bccf2e2b0151",
                "verification": {
                    "payload": "tree 016ef2741f43f02d116f2863a82ddc656b6b051f\nparent fb9b74e25637b67d44a527dcec9aaac303f594c6\nparent 5659815efe58593409724ce91357ba4ca1955489\nauthor Rohit Phaniram Sakamuri <148008559+RohitPhaniramSakamuri@users.noreply.github.com> 1728554639 +0530\ncommitter GitHub <noreply@github.com> 1728554639 +0530\n\nMerge branch 'dev' into dev",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnB6aPCRC1aQ7uu5UhlAAARdcQAD8SnS11wJHm5ochlEPYvtLv\nCgXOfjd36GgeL1maL46z/fChfcm95Sle8NY4tTkbOPfPZL5qYpWc+V3cBrOjiPho\nAXTjjPTxPh1SZPG9LyuaNG49QOMR0Fb28lvnJQUWg75tLP4FdQUwMqL+H7JHx/fD\nWBoa4ulJ6JyJTxtWr6Z0bw4pJtpVdk095GZcZGbjvywXL9d8RlTPbo0w/P4ovce9\nSStgB0Mlevzi3aMTOIkVtkKtzhjnsc0YA9Rm3aXs8lM0dnm7Zz6iNVbwNy9BlzIZ\n4w9UBL+7pokO1Q2Zj/Vb9hvQyiXKzNEIYId9ViEzyPm0BCAtJtWajiOQg7uuhera\nNwEtFLFPf6VPZJ0AWo03anFvfcN9IMUrlVPyIeGoPM2LlUbiUZR/GDHjttHW09Zh\nHkm/u4Tz27ZF2rXsFrlWyDzZIW7r39jFD2vVcXPXs4UT6JE4d2F/hSZDF61Z0oSe\na9van3RegaFt7VQIB6xUoczkeTTZ3hJkmmDu5nOnNQZvderRukbxREHpKSf0n6XK\nsqcMHvdZHd5niE4jo+Afqb4uCf7ePZseFHSYudW9/Lw3HFhWUXElHOjVPTLxDcCQ\n9S3P1R5ipIFLcA+oB2IDwYLeDFHg1WMc/959Cszw0zl3OiLi/hJ2CmAoQjGfs842\nBw85Qhc60Xs4xTVryXMz\n=tn2M\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-30T20:44:13Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/d96c3d3582404418495ae9831289bccf2e2b0151",
            "node_id": "C_kwDOM8WH19oAKGQ5NmMzZDM1ODI0MDQ0MTg0OTVhZTk4MzEyODliY2NmMmUyYjAxNTE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/fb9b74e25637b67d44a527dcec9aaac303f594c6",
                    "sha": "fb9b74e25637b67d44a527dcec9aaac303f594c6",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/fb9b74e25637b67d44a527dcec9aaac303f594c6"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/5659815efe58593409724ce91357ba4ca1955489",
                    "sha": "5659815efe58593409724ce91357ba4ca1955489",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5659815efe58593409724ce91357ba4ca1955489"
                }
            ],
            "sha": "d96c3d3582404418495ae9831289bccf2e2b0151",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/d96c3d3582404418495ae9831289bccf2e2b0151"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/145839268?v=4",
                "events_url": "https://api.github.com/users/SarupaVL/events{/privacy}",
                "followers_url": "https://api.github.com/users/SarupaVL/followers",
                "following_url": "https://api.github.com/users/SarupaVL/following{/other_user}",
                "gists_url": "https://api.github.com/users/SarupaVL/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/SarupaVL",
                "id": 145839268,
                "login": "SarupaVL",
                "node_id": "U_kgDOCLFUpA",
                "organizations_url": "https://api.github.com/users/SarupaVL/orgs",
                "received_events_url": "https://api.github.com/users/SarupaVL/received_events",
                "repos_url": "https://api.github.com/users/SarupaVL/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/SarupaVL/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/SarupaVL/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/SarupaVL",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b59bf221e973f32cba54a1317507683733901075/comments",
            "commit": {
                "author": {
                    "date": "2024-10-09T21:25:03Z",
                    "email": "lakshmisarupa@gmail.com",
                    "name": "SarupaVL"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-09T21:25:03Z",
                    "email": "lakshmisarupa@gmail.com",
                    "name": "SarupaVL"
                },
                "message": "feat: Syllabus Page",
                "tree": {
                    "sha": "1beaa48ebca4eef943a2532ab01ab1fbc8195c6f",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/1beaa48ebca4eef943a2532ab01ab1fbc8195c6f"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/b59bf221e973f32cba54a1317507683733901075",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/145839268?v=4",
                "events_url": "https://api.github.com/users/SarupaVL/events{/privacy}",
                "followers_url": "https://api.github.com/users/SarupaVL/followers",
                "following_url": "https://api.github.com/users/SarupaVL/following{/other_user}",
                "gists_url": "https://api.github.com/users/SarupaVL/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/SarupaVL",
                "id": 145839268,
                "login": "SarupaVL",
                "node_id": "U_kgDOCLFUpA",
                "organizations_url": "https://api.github.com/users/SarupaVL/orgs",
                "received_events_url": "https://api.github.com/users/SarupaVL/received_events",
                "repos_url": "https://api.github.com/users/SarupaVL/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/SarupaVL/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/SarupaVL/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/SarupaVL",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/b59bf221e973f32cba54a1317507683733901075",
            "node_id": "C_kwDOM8WH19oAKGI1OWJmMjIxZTk3M2YzMmNiYTU0YTEzMTc1MDc2ODM3MzM5MDEwNzU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6",
                    "sha": "ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6"
                }
            ],
            "sha": "b59bf221e973f32cba54a1317507683733901075",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b59bf221e973f32cba54a1317507683733901075"
        },
        {
            "author": null,
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a8f519471034c52e638092bed9357ef265d72c5c/comments",
            "commit": {
                "author": {
                    "date": "2024-10-09T18:29:16Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-09T18:29:16Z",
                    "email": "Mahendra785",
                    "name": "Mahendra785"
                },
                "message": "fix : pdfviewer on full screen",
                "tree": {
                    "sha": "7ffece7aa742cee161df2cb4921e3f26d4939867",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/7ffece7aa742cee161df2cb4921e3f26d4939867"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/a8f519471034c52e638092bed9357ef265d72c5c",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": null,
            "html_url": "https://github.com/theg1239/ExamCooker/commit/a8f519471034c52e638092bed9357ef265d72c5c",
            "node_id": "C_kwDOM8WH19oAKGE4ZjUxOTQ3MTAzNGM1MmU2MzgwOTJiZWQ5MzU3ZWYyNjVkNzJjNWM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/4b59b0020dce77347233edc4d932edf62d56c9f7",
                    "sha": "4b59b0020dce77347233edc4d932edf62d56c9f7",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4b59b0020dce77347233edc4d932edf62d56c9f7"
                }
            ],
            "sha": "a8f519471034c52e638092bed9357ef265d72c5c",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a8f519471034c52e638092bed9357ef265d72c5c"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/64310381?v=4",
                "events_url": "https://api.github.com/users/bhatiyavansh/events{/privacy}",
                "followers_url": "https://api.github.com/users/bhatiyavansh/followers",
                "following_url": "https://api.github.com/users/bhatiyavansh/following{/other_user}",
                "gists_url": "https://api.github.com/users/bhatiyavansh/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/bhatiyavansh",
                "id": 64310381,
                "login": "bhatiyavansh",
                "node_id": "MDQ6VXNlcjY0MzEwMzgx",
                "organizations_url": "https://api.github.com/users/bhatiyavansh/orgs",
                "received_events_url": "https://api.github.com/users/bhatiyavansh/received_events",
                "repos_url": "https://api.github.com/users/bhatiyavansh/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/bhatiyavansh/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bhatiyavansh/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/bhatiyavansh",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4d09b393b14ed66ff7e92681cd9d033b84cfc5a3/comments",
            "commit": {
                "author": {
                    "date": "2024-10-09T15:11:24Z",
                    "email": "64310381+bhatiyavansh@users.noreply.github.com",
                    "name": "Vansh Bhatiya"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-09T15:11:24Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge branch 'ACM-VIT:dev' into dev",
                "tree": {
                    "sha": "3c742a2fa48657a5a471f6d87f37fe4ee7e268db",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/3c742a2fa48657a5a471f6d87f37fe4ee7e268db"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/4d09b393b14ed66ff7e92681cd9d033b84cfc5a3",
                "verification": {
                    "payload": "tree 3c742a2fa48657a5a471f6d87f37fe4ee7e268db\nparent 8b34f8a55bec04aee3b3d034a1a2955781e1ef9a\nparent 5659815efe58593409724ce91357ba4ca1955489\nauthor Vansh Bhatiya <64310381+bhatiyavansh@users.noreply.github.com> 1728486684 +0530\ncommitter GitHub <noreply@github.com> 1728486684 +0530\n\nMerge branch 'ACM-VIT:dev' into dev\n",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnBp0cCRC1aQ7uu5UhlAAAXc8QABIiZGvoqQ0cMhQvUv5Pz3PH\nGS129RFKLU3PAUjuXZi38KCd7HMMa9U4QHLUe/f+8MYUKHlkCWqT4VwnDtqN250+\ngokb20mKcBE1AFN/YWn0qpyBxENhyg5tJ8ovlWzGWUcy2iNdNrl/VkNRggT91m2I\nLbJefoUbvXCebXzec2ZNEcv1r72wauoP9Wwv1MQSIv2s8gI/QzACgecxUGAD0yD9\nDrnyQdgS9PCQwXrM1cfExw+Kl/wgMURWmRW0w7xh5fuozickjhe2YI/k93FDjcct\n4I9OmS71B/Vx7iKN72tkXlDAW+cDc/1XTMb43jhbUKU9si7V2jstL6UaBpzCIsRb\nJP235ZHYbx8i9afeoHZqLsRtDDchNyaSzSQLOphpw+59oKRhsv2LgGH0MLaS0f8o\nQRVKFYiA4fj82rkvShJ8kmLKrUWeWFjADUEtcdC9jjyFCGy+/0IFsuzaqtiKirWK\nX7i6BHpWaLP+iCF0GsewB1CCzXpc/DnuAHH4U/LvUyXbvtPngYq5ndS6sDTJ4RjL\nD195EErdS/dRkEUIjWZTNrBAC3r/EO+dEnn7NVG8LmEXkMWuZj1+f7BQUfc6FRPB\nK9S5mL6bC+jlwHWWxMxEvJXO77tIUwAQJdUXlQ7hEmDTh/jZwpcEw6SbgXAQR+iP\nJPztLpt9trHy+kTzYSb1\n=rWJf\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-12T22:11:50Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/4d09b393b14ed66ff7e92681cd9d033b84cfc5a3",
            "node_id": "C_kwDOM8WH19oAKDRkMDliMzkzYjE0ZWQ2NmZmN2U5MjY4MWNkOWQwMzNiODRjZmM1YTM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/8b34f8a55bec04aee3b3d034a1a2955781e1ef9a",
                    "sha": "8b34f8a55bec04aee3b3d034a1a2955781e1ef9a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8b34f8a55bec04aee3b3d034a1a2955781e1ef9a"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/5659815efe58593409724ce91357ba4ca1955489",
                    "sha": "5659815efe58593409724ce91357ba4ca1955489",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5659815efe58593409724ce91357ba4ca1955489"
                }
            ],
            "sha": "4d09b393b14ed66ff7e92681cd9d033b84cfc5a3",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/4d09b393b14ed66ff7e92681cd9d033b84cfc5a3"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/64310381?v=4",
                "events_url": "https://api.github.com/users/bhatiyavansh/events{/privacy}",
                "followers_url": "https://api.github.com/users/bhatiyavansh/followers",
                "following_url": "https://api.github.com/users/bhatiyavansh/following{/other_user}",
                "gists_url": "https://api.github.com/users/bhatiyavansh/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/bhatiyavansh",
                "id": 64310381,
                "login": "bhatiyavansh",
                "node_id": "MDQ6VXNlcjY0MzEwMzgx",
                "organizations_url": "https://api.github.com/users/bhatiyavansh/orgs",
                "received_events_url": "https://api.github.com/users/bhatiyavansh/received_events",
                "repos_url": "https://api.github.com/users/bhatiyavansh/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/bhatiyavansh/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bhatiyavansh/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/bhatiyavansh",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8b34f8a55bec04aee3b3d034a1a2955781e1ef9a/comments",
            "commit": {
                "author": {
                    "date": "2024-10-09T15:10:38Z",
                    "email": "bhatiyavansh@gmail.com",
                    "name": "bhatiyavansh"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-09T15:10:38Z",
                    "email": "bhatiyavansh@gmail.com",
                    "name": "bhatiyavansh"
                },
                "message": "made the list persistent using local storage, and made it responsive to mobile sizes",
                "tree": {
                    "sha": "6cf7a83d618ca3b6a3dc34414734f982a45d9bc4",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/6cf7a83d618ca3b6a3dc34414734f982a45d9bc4"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/8b34f8a55bec04aee3b3d034a1a2955781e1ef9a",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/64310381?v=4",
                "events_url": "https://api.github.com/users/bhatiyavansh/events{/privacy}",
                "followers_url": "https://api.github.com/users/bhatiyavansh/followers",
                "following_url": "https://api.github.com/users/bhatiyavansh/following{/other_user}",
                "gists_url": "https://api.github.com/users/bhatiyavansh/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/bhatiyavansh",
                "id": 64310381,
                "login": "bhatiyavansh",
                "node_id": "MDQ6VXNlcjY0MzEwMzgx",
                "organizations_url": "https://api.github.com/users/bhatiyavansh/orgs",
                "received_events_url": "https://api.github.com/users/bhatiyavansh/received_events",
                "repos_url": "https://api.github.com/users/bhatiyavansh/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/bhatiyavansh/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bhatiyavansh/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/bhatiyavansh",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/8b34f8a55bec04aee3b3d034a1a2955781e1ef9a",
            "node_id": "C_kwDOM8WH19oAKDhiMzRmOGE1NWJlYzA0YWVlM2IzZDAzNGExYTI5NTU3ODFlMWVmOWE",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/1225309f3f6555e811a3f407a71d47edc842fe26",
                    "sha": "1225309f3f6555e811a3f407a71d47edc842fe26",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/1225309f3f6555e811a3f407a71d47edc842fe26"
                }
            ],
            "sha": "8b34f8a55bec04aee3b3d034a1a2955781e1ef9a",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/8b34f8a55bec04aee3b3d034a1a2955781e1ef9a"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5659815efe58593409724ce91357ba4ca1955489/comments",
            "commit": {
                "author": {
                    "date": "2024-10-09T11:08:18Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-09T11:08:18Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #179 from Alan-J-Bibins/dev\n\nfeat: Button to copy link of past paper or note",
                "tree": {
                    "sha": "75aa9a685d15fa9458fa0c1354c88afc430f533f",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/75aa9a685d15fa9458fa0c1354c88afc430f533f"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/5659815efe58593409724ce91357ba4ca1955489",
                "verification": {
                    "payload": "tree 75aa9a685d15fa9458fa0c1354c88afc430f533f\nparent b02999b237ef283aaa2a7812aeee81f5c41425fc\nparent 6e4b44f216ef1f3f2bf8cc0dc58ae7aff34a08b8\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728472098 +0530\ncommitter GitHub <noreply@github.com> 1728472098 +0530\n\nMerge pull request #179 from Alan-J-Bibins/dev\n\nfeat: Button to copy link of past paper or note",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnBmQiCRC1aQ7uu5UhlAAA7LsQAHA7UBF912Z+gkrdm1GaOvnB\nPVxknSstCvRszYlXiJZbi+40lH1gqYGD6HCJQzT6wNXz2WbZT5v2+56F68ujAQaz\nAHtfe7YT9t3HMEesvoWLdR+GKpMVFkVgQMHaQ15uiPx8gAbLcFik/qnZ0EYKu+Gx\nxDCgRK+IiW5S+bbL0qA1Xi8DGwzHC1Sz/irTHWVxN92i/j9A2TVIkWMbAyFT4hCl\naW9TekiTagU97VNBIr4aYj+Hh35bz7RII0AJ9uG94o+++0pfzlzDzJgl4w6u26Cu\nUSBEC2UQoi0gWcESDIcnWw2EKoEvnSWOP2OhbEuAwTl49MZ/UXK0fCijnYgJQBor\nM2bglj0717ZPnMbD2m8HGNa0sajv6uxdqWGGSCbofJxmVZyNuG0vUbyFayTGtfXD\nmptL/4rIyCAnfwLKGX7Ps63wpHzkAzvWQK9kxUaB4xicO3JPTlDkgOBRFS8cYRo9\nYcBpDD4+e0c4Jff5VKe7L7+tkcrpTuDHg0BjFR8ARhWQwFEsim/SHxTJjNYdSfBG\nbyihdfGNI19dxOP3HS63NItPfC+dU26fyGVDLftdWtMxCvJo1BNuu8TADY0nD31K\njXzdntlrFlyQC6uB2FRMVBxbTUKihS0QEZoN1tQtAFq2QLUh5Kp8uwyt6HUwoe0s\n3q+Tm2171XCTRhLMEFcy\n=FbVf\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/5659815efe58593409724ce91357ba4ca1955489",
            "node_id": "C_kwDOM8WH19oAKDU2NTk4MTVlZmU1ODU5MzQwOTcyNGNlOTEzNTdiYTRjYTE5NTU0ODk",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/b02999b237ef283aaa2a7812aeee81f5c41425fc",
                    "sha": "b02999b237ef283aaa2a7812aeee81f5c41425fc",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b02999b237ef283aaa2a7812aeee81f5c41425fc"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/6e4b44f216ef1f3f2bf8cc0dc58ae7aff34a08b8",
                    "sha": "6e4b44f216ef1f3f2bf8cc0dc58ae7aff34a08b8",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6e4b44f216ef1f3f2bf8cc0dc58ae7aff34a08b8"
                }
            ],
            "sha": "5659815efe58593409724ce91357ba4ca1955489",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5659815efe58593409724ce91357ba4ca1955489"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
                "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
                "followers_url": "https://api.github.com/users/Supratim69/followers",
                "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
                "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Supratim69",
                "id": 128067781,
                "login": "Supratim69",
                "node_id": "U_kgDOB6IoxQ",
                "organizations_url": "https://api.github.com/users/Supratim69/orgs",
                "received_events_url": "https://api.github.com/users/Supratim69/received_events",
                "repos_url": "https://api.github.com/users/Supratim69/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Supratim69",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b02999b237ef283aaa2a7812aeee81f5c41425fc/comments",
            "commit": {
                "author": {
                    "date": "2024-10-09T11:07:01Z",
                    "email": "128067781+Supratim69@users.noreply.github.com",
                    "name": "Supratim Ghose"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-09T11:07:01Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge pull request #182 from nitine/dev\n\nSocial media popup",
                "tree": {
                    "sha": "41d2121d7a48104c5f5790ff9e5798cf23284eed",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/41d2121d7a48104c5f5790ff9e5798cf23284eed"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/b02999b237ef283aaa2a7812aeee81f5c41425fc",
                "verification": {
                    "payload": "tree 41d2121d7a48104c5f5790ff9e5798cf23284eed\nparent ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6\nparent 5922c7f4eda559a1f12bde5860c517dcda249832\nauthor Supratim Ghose <128067781+Supratim69@users.noreply.github.com> 1728472021 +0530\ncommitter GitHub <noreply@github.com> 1728472021 +0530\n\nMerge pull request #182 from nitine/dev\n\nSocial media popup",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnBmPVCRC1aQ7uu5UhlAAAtB0QAK5dP6VxeDtDCa0X2UIFvawB\nYHefCmB7hAny75sS4GWloCDvC2pYk/spkHi22nBEgr84EHZOVHAgm3/xxYiBfLzZ\nHlhz9xApDmB3+l1vbMxYI6fVlrd9jhSpkLuwR6Li7+qmufi5Dp6gWrydSUJLWrd8\ncxkVTNPemJCpx45NpKWQ5caY5UTHNLpJyjPr4xvoMrSY+osJX2RLNwe2VRsytz3h\n8KLDQakAmNTX5xjWAWDVy2HwnD9kmz/LylxLqPCOrmzTsEKSgvUxHxCwHAFrO5t6\nL6328rU1ZVKknr37kC2QGsRPF9aDYxmkasYwpzMWFCZqdJIVSuY0n/Y5uGwWcPCp\nQylvHVsBgyhJ0RzaqZLgAs7uD83ze4T1Ufl/7KAhQLvmG5yQWo9DahOnvR2JCeMN\nxwaMwQemmDOmQvUHF9Gzkqf/IJzXCKjsu9hPig3tv/nN9z8evMTUtYOLBt4VLPCF\n5OfZo5o4QyLRM8dz7d4/LLAwVBgj0yKKIwfv34iQDrgwzRjw5rMRxSmPJjvwxY4L\nf4i4ASTXCqBQnJUbQm5Rr3XeRTSRuaGXn1XkvE1j9bR1aSn0UG8nrAbZrQ0n1oHQ\nvRjZaR9GCgZtk2DhRRbjHxPiSjYotJXcFamKxQFZUpGQ4bJynAWrtHHmcl70n2KL\nrLRNbxM74BTkLHf96jdY\n=Dr24\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-07T16:41:20Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/b02999b237ef283aaa2a7812aeee81f5c41425fc",
            "node_id": "C_kwDOM8WH19oAKGIwMjk5OWIyMzdlZjI4M2FhYTJhNzgxMmFlZWU4MWY1YzQxNDI1ZmM",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6",
                    "sha": "ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/5922c7f4eda559a1f12bde5860c517dcda249832",
                    "sha": "5922c7f4eda559a1f12bde5860c517dcda249832",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5922c7f4eda559a1f12bde5860c517dcda249832"
                }
            ],
            "sha": "b02999b237ef283aaa2a7812aeee81f5c41425fc",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/b02999b237ef283aaa2a7812aeee81f5c41425fc"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/133870519?v=4",
                "events_url": "https://api.github.com/users/nitine/events{/privacy}",
                "followers_url": "https://api.github.com/users/nitine/followers",
                "following_url": "https://api.github.com/users/nitine/following{/other_user}",
                "gists_url": "https://api.github.com/users/nitine/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/nitine",
                "id": 133870519,
                "login": "nitine",
                "node_id": "U_kgDOB_qztw",
                "organizations_url": "https://api.github.com/users/nitine/orgs",
                "received_events_url": "https://api.github.com/users/nitine/received_events",
                "repos_url": "https://api.github.com/users/nitine/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/nitine/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/nitine/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/nitine",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5922c7f4eda559a1f12bde5860c517dcda249832/comments",
            "commit": {
                "author": {
                    "date": "2024-10-08T16:20:59Z",
                    "email": "nitin.spaced@gmail.com",
                    "name": "nitine"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-08T16:22:35Z",
                    "email": "nitin.spaced@gmail.com",
                    "name": "nitine"
                },
                "message": "feat: new social media popup",
                "tree": {
                    "sha": "41d2121d7a48104c5f5790ff9e5798cf23284eed",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/41d2121d7a48104c5f5790ff9e5798cf23284eed"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/5922c7f4eda559a1f12bde5860c517dcda249832",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/133870519?v=4",
                "events_url": "https://api.github.com/users/nitine/events{/privacy}",
                "followers_url": "https://api.github.com/users/nitine/followers",
                "following_url": "https://api.github.com/users/nitine/following{/other_user}",
                "gists_url": "https://api.github.com/users/nitine/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/nitine",
                "id": 133870519,
                "login": "nitine",
                "node_id": "U_kgDOB_qztw",
                "organizations_url": "https://api.github.com/users/nitine/orgs",
                "received_events_url": "https://api.github.com/users/nitine/received_events",
                "repos_url": "https://api.github.com/users/nitine/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/nitine/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/nitine/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/nitine",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/5922c7f4eda559a1f12bde5860c517dcda249832",
            "node_id": "C_kwDOM8WH19oAKDU5MjJjN2Y0ZWRhNTU5YTFmMTJiZGU1ODYwYzUxN2RjZGEyNDk4MzI",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/bcbd7fd7f0dc033cd82dcfecc2e471dfe660d465",
                    "sha": "bcbd7fd7f0dc033cd82dcfecc2e471dfe660d465",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/bcbd7fd7f0dc033cd82dcfecc2e471dfe660d465"
                }
            ],
            "sha": "5922c7f4eda559a1f12bde5860c517dcda249832",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/5922c7f4eda559a1f12bde5860c517dcda249832"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6e4b44f216ef1f3f2bf8cc0dc58ae7aff34a08b8/comments",
            "commit": {
                "author": {
                    "date": "2024-10-08T16:05:58Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-08T16:05:58Z",
                    "email": "alanjbibins@gmail.com",
                    "name": "Alan-J-Bibins"
                },
                "message": "refactor: Made the position of success indicator uniform",
                "tree": {
                    "sha": "b3d99c81b4cb43aa937474e1364f21772ad0511c",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/b3d99c81b4cb43aa937474e1364f21772ad0511c"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/6e4b44f216ef1f3f2bf8cc0dc58ae7aff34a08b8",
                "verification": {
                    "payload": null,
                    "reason": "unsigned",
                    "signature": null,
                    "verified": false,
                    "verified_at": null
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
                "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
                "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
                "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
                "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/Alan-J-Bibins",
                "id": 89975500,
                "login": "Alan-J-Bibins",
                "node_id": "MDQ6VXNlcjg5OTc1NTAw",
                "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
                "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
                "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/Alan-J-Bibins",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/6e4b44f216ef1f3f2bf8cc0dc58ae7aff34a08b8",
            "node_id": "C_kwDOM8WH19oAKDZlNGI0NGYyMTZlZjFmM2YyYmY4Y2MwZGM1OGFlN2FmZjM0YTA4Yjg",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/7337bf475c4d505a964b3f27359355178d6aa91e",
                    "sha": "7337bf475c4d505a964b3f27359355178d6aa91e",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/7337bf475c4d505a964b3f27359355178d6aa91e"
                }
            ],
            "sha": "6e4b44f216ef1f3f2bf8cc0dc58ae7aff34a08b8",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/6e4b44f216ef1f3f2bf8cc0dc58ae7aff34a08b8"
        },
        {
            "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/133870519?v=4",
                "events_url": "https://api.github.com/users/nitine/events{/privacy}",
                "followers_url": "https://api.github.com/users/nitine/followers",
                "following_url": "https://api.github.com/users/nitine/following{/other_user}",
                "gists_url": "https://api.github.com/users/nitine/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/nitine",
                "id": 133870519,
                "login": "nitine",
                "node_id": "U_kgDOB_qztw",
                "organizations_url": "https://api.github.com/users/nitine/orgs",
                "received_events_url": "https://api.github.com/users/nitine/received_events",
                "repos_url": "https://api.github.com/users/nitine/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/nitine/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/nitine/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/nitine",
                "user_view_type": "public"
            },
            "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/commits/bcbd7fd7f0dc033cd82dcfecc2e471dfe660d465/comments",
            "commit": {
                "author": {
                    "date": "2024-10-08T15:55:26Z",
                    "email": "133870519+nitine@users.noreply.github.com",
                    "name": "Nitin"
                },
                "comment_count": 0,
                "committer": {
                    "date": "2024-10-08T15:55:26Z",
                    "email": "noreply@github.com",
                    "name": "GitHub"
                },
                "message": "Merge branch 'ACM-VIT:dev' into dev",
                "tree": {
                    "sha": "c80a8e3458eaf41a2245efe83c2a30774ced5054",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees/c80a8e3458eaf41a2245efe83c2a30774ced5054"
                },
                "url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits/bcbd7fd7f0dc033cd82dcfecc2e471dfe660d465",
                "verification": {
                    "payload": "tree c80a8e3458eaf41a2245efe83c2a30774ced5054\nparent a01dec0b2b05906eaeadbad7f234deefb848253a\nparent ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6\nauthor Nitin <133870519+nitine@users.noreply.github.com> 1728402926 +0530\ncommitter GitHub <noreply@github.com> 1728402926 +0530\n\nMerge branch 'ACM-VIT:dev' into dev\n",
                    "reason": "valid",
                    "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnBVXuCRC1aQ7uu5UhlAAACkgQAET8SckYBbrk58A6/QEnNAvF\nq2XfPejGYJ+rrg+sy0tskwtPe3URoRIVhHvlZh7ItLtBQb5PtrUUALu26aTiT6iI\nJQnfqCMsmfKUWFSUySI4RPGXvRSTGC6sQ2pGt7baG3OL7z02Swa+jWzx2V4Mcm5V\nxDb3DTl7LR3vcu387QL8iyUhkiQu+YirKbHGaOuMbUhztsOVUi2rMBdvNkaGzaan\n8+LKluE2cvrPKOXbecN4Hr4lSF4nzICq5d6Kw2iiVndGLWwLyzGl8KBjuX4fXvEn\nnHMybBunPRqVZ84LRRoJIm2EkbQPoHf97M4MrzuYdhel8nxIOgzTK/mKrrTeLrc+\nY8EarOO4oq4bFGVQlEQehoDHIK5OMPqzSrFIcK9REXpqLaBmDnX6sJKCx43TRMjW\nrbJ5vZDUJoPlnUHN5h7oi/Fu5pzIYMbMOCvIqRNlgtDq7afk533YUWspV/x7z9tD\noTyIrk0G4nBds9/M6+XGbAHBtHmWNf56J9RBZA5P/i/OZto0sqnlFNpfqfvx/GrN\nVD5DjlufdGzuHAIkk9VThFJPPqe4NSJtspS5YJFkkk1xTbXST/T5+vH4tQPneaeQ\nhuYr+jNjAhArqWsDiGhwQVWGwcF8UtP2Mz8JVix7YE5Iq+L9O9ynFUmAeio9ME1x\n/1jjyKoZ1ujQmH8EHKt8\n=rP+k\n-----END PGP SIGNATURE-----\n",
                    "verified": true,
                    "verified_at": "2024-11-12T22:14:02Z"
                }
            },
            "committer": {
                "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
                "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
                "followers_url": "https://api.github.com/users/web-flow/followers",
                "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
                "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/web-flow",
                "id": 19864447,
                "login": "web-flow",
                "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
                "organizations_url": "https://api.github.com/users/web-flow/orgs",
                "received_events_url": "https://api.github.com/users/web-flow/received_events",
                "repos_url": "https://api.github.com/users/web-flow/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/web-flow",
                "user_view_type": "public"
            },
            "html_url": "https://github.com/theg1239/ExamCooker/commit/bcbd7fd7f0dc033cd82dcfecc2e471dfe660d465",
            "node_id": "C_kwDOM8WH19oAKGJjYmQ3ZmQ3ZjBkYzAzM2NkODJkY2ZlY2MyZTQ3MWRmZTY2MGQ0NjU",
            "parents": [
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/a01dec0b2b05906eaeadbad7f234deefb848253a",
                    "sha": "a01dec0b2b05906eaeadbad7f234deefb848253a",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/a01dec0b2b05906eaeadbad7f234deefb848253a"
                },
                {
                    "html_url": "https://github.com/theg1239/ExamCooker/commit/ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6",
                    "sha": "ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6",
                    "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/ba33cf92f68ce387ec6185d3525d9d8aa9fef7b6"
                }
            ],
            "sha": "bcbd7fd7f0dc033cd82dcfecc2e471dfe660d465",
            "url": "https://api.github.com/repos/theg1239/ExamCooker/commits/bcbd7fd7f0dc033cd82dcfecc2e471dfe660d465"
        }
    ],
    "contributors": [
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/128067781?v=4",
            "contributions": 185,
            "events_url": "https://api.github.com/users/Supratim69/events{/privacy}",
            "followers_url": "https://api.github.com/users/Supratim69/followers",
            "following_url": "https://api.github.com/users/Supratim69/following{/other_user}",
            "gists_url": "https://api.github.com/users/Supratim69/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/Supratim69",
            "id": 128067781,
            "login": "Supratim69",
            "node_id": "U_kgDOB6IoxQ",
            "organizations_url": "https://api.github.com/users/Supratim69/orgs",
            "received_events_url": "https://api.github.com/users/Supratim69/received_events",
            "repos_url": "https://api.github.com/users/Supratim69/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/Supratim69/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Supratim69/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/Supratim69",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/89975500?v=4",
            "contributions": 153,
            "events_url": "https://api.github.com/users/Alan-J-Bibins/events{/privacy}",
            "followers_url": "https://api.github.com/users/Alan-J-Bibins/followers",
            "following_url": "https://api.github.com/users/Alan-J-Bibins/following{/other_user}",
            "gists_url": "https://api.github.com/users/Alan-J-Bibins/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/Alan-J-Bibins",
            "id": 89975500,
            "login": "Alan-J-Bibins",
            "node_id": "MDQ6VXNlcjg5OTc1NTAw",
            "organizations_url": "https://api.github.com/users/Alan-J-Bibins/orgs",
            "received_events_url": "https://api.github.com/users/Alan-J-Bibins/received_events",
            "repos_url": "https://api.github.com/users/Alan-J-Bibins/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/Alan-J-Bibins/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Alan-J-Bibins/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/Alan-J-Bibins",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/148008559?v=4",
            "contributions": 78,
            "events_url": "https://api.github.com/users/RohitPhaniramSakamuri/events{/privacy}",
            "followers_url": "https://api.github.com/users/RohitPhaniramSakamuri/followers",
            "following_url": "https://api.github.com/users/RohitPhaniramSakamuri/following{/other_user}",
            "gists_url": "https://api.github.com/users/RohitPhaniramSakamuri/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/RohitPhaniramSakamuri",
            "id": 148008559,
            "login": "RohitPhaniramSakamuri",
            "node_id": "U_kgDOCNJubw",
            "organizations_url": "https://api.github.com/users/RohitPhaniramSakamuri/orgs",
            "received_events_url": "https://api.github.com/users/RohitPhaniramSakamuri/received_events",
            "repos_url": "https://api.github.com/users/RohitPhaniramSakamuri/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/RohitPhaniramSakamuri/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/RohitPhaniramSakamuri/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/RohitPhaniramSakamuri",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/85606266?v=4",
            "contributions": 51,
            "events_url": "https://api.github.com/users/kairavsheth/events{/privacy}",
            "followers_url": "https://api.github.com/users/kairavsheth/followers",
            "following_url": "https://api.github.com/users/kairavsheth/following{/other_user}",
            "gists_url": "https://api.github.com/users/kairavsheth/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/kairavsheth",
            "id": 85606266,
            "login": "kairavsheth",
            "node_id": "MDQ6VXNlcjg1NjA2MjY2",
            "organizations_url": "https://api.github.com/users/kairavsheth/orgs",
            "received_events_url": "https://api.github.com/users/kairavsheth/received_events",
            "repos_url": "https://api.github.com/users/kairavsheth/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/kairavsheth/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/kairavsheth/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/kairavsheth",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/133870519?v=4",
            "contributions": 36,
            "events_url": "https://api.github.com/users/nitine/events{/privacy}",
            "followers_url": "https://api.github.com/users/nitine/followers",
            "following_url": "https://api.github.com/users/nitine/following{/other_user}",
            "gists_url": "https://api.github.com/users/nitine/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/nitine",
            "id": 133870519,
            "login": "nitine",
            "node_id": "U_kgDOB_qztw",
            "organizations_url": "https://api.github.com/users/nitine/orgs",
            "received_events_url": "https://api.github.com/users/nitine/received_events",
            "repos_url": "https://api.github.com/users/nitine/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/nitine/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nitine/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/nitine",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/124476265?v=4",
            "contributions": 30,
            "events_url": "https://api.github.com/users/AnishaDhoot/events{/privacy}",
            "followers_url": "https://api.github.com/users/AnishaDhoot/followers",
            "following_url": "https://api.github.com/users/AnishaDhoot/following{/other_user}",
            "gists_url": "https://api.github.com/users/AnishaDhoot/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/AnishaDhoot",
            "id": 124476265,
            "login": "AnishaDhoot",
            "node_id": "U_kgDOB2tbaQ",
            "organizations_url": "https://api.github.com/users/AnishaDhoot/orgs",
            "received_events_url": "https://api.github.com/users/AnishaDhoot/received_events",
            "repos_url": "https://api.github.com/users/AnishaDhoot/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/AnishaDhoot/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/AnishaDhoot/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/AnishaDhoot",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/134516022?v=4",
            "contributions": 27,
            "events_url": "https://api.github.com/users/ojasKooL/events{/privacy}",
            "followers_url": "https://api.github.com/users/ojasKooL/followers",
            "following_url": "https://api.github.com/users/ojasKooL/following{/other_user}",
            "gists_url": "https://api.github.com/users/ojasKooL/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/ojasKooL",
            "id": 134516022,
            "login": "ojasKooL",
            "node_id": "U_kgDOCASNNg",
            "organizations_url": "https://api.github.com/users/ojasKooL/orgs",
            "received_events_url": "https://api.github.com/users/ojasKooL/received_events",
            "repos_url": "https://api.github.com/users/ojasKooL/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/ojasKooL/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ojasKooL/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/ojasKooL",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/121416598?v=4",
            "contributions": 21,
            "events_url": "https://api.github.com/users/Nitesh-04/events{/privacy}",
            "followers_url": "https://api.github.com/users/Nitesh-04/followers",
            "following_url": "https://api.github.com/users/Nitesh-04/following{/other_user}",
            "gists_url": "https://api.github.com/users/Nitesh-04/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/Nitesh-04",
            "id": 121416598,
            "login": "Nitesh-04",
            "node_id": "U_kgDOBzyrlg",
            "organizations_url": "https://api.github.com/users/Nitesh-04/orgs",
            "received_events_url": "https://api.github.com/users/Nitesh-04/received_events",
            "repos_url": "https://api.github.com/users/Nitesh-04/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/Nitesh-04/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Nitesh-04/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/Nitesh-04",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/171571261?v=4",
            "contributions": 19,
            "events_url": "https://api.github.com/users/Kaustubh-sandy/events{/privacy}",
            "followers_url": "https://api.github.com/users/Kaustubh-sandy/followers",
            "following_url": "https://api.github.com/users/Kaustubh-sandy/following{/other_user}",
            "gists_url": "https://api.github.com/users/Kaustubh-sandy/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/Kaustubh-sandy",
            "id": 171571261,
            "login": "Kaustubh-sandy",
            "node_id": "U_kgDOCjn4PQ",
            "organizations_url": "https://api.github.com/users/Kaustubh-sandy/orgs",
            "received_events_url": "https://api.github.com/users/Kaustubh-sandy/received_events",
            "repos_url": "https://api.github.com/users/Kaustubh-sandy/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/Kaustubh-sandy/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Kaustubh-sandy/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/Kaustubh-sandy",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/145484643?v=4",
            "contributions": 14,
            "events_url": "https://api.github.com/users/mahendra785/events{/privacy}",
            "followers_url": "https://api.github.com/users/mahendra785/followers",
            "following_url": "https://api.github.com/users/mahendra785/following{/other_user}",
            "gists_url": "https://api.github.com/users/mahendra785/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/mahendra785",
            "id": 145484643,
            "login": "mahendra785",
            "node_id": "U_kgDOCKvrYw",
            "organizations_url": "https://api.github.com/users/mahendra785/orgs",
            "received_events_url": "https://api.github.com/users/mahendra785/received_events",
            "repos_url": "https://api.github.com/users/mahendra785/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/mahendra785/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mahendra785/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/mahendra785",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/164670196?v=4",
            "contributions": 6,
            "events_url": "https://api.github.com/users/adii2ma/events{/privacy}",
            "followers_url": "https://api.github.com/users/adii2ma/followers",
            "following_url": "https://api.github.com/users/adii2ma/following{/other_user}",
            "gists_url": "https://api.github.com/users/adii2ma/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/adii2ma",
            "id": 164670196,
            "login": "adii2ma",
            "node_id": "U_kgDOCdCq9A",
            "organizations_url": "https://api.github.com/users/adii2ma/orgs",
            "received_events_url": "https://api.github.com/users/adii2ma/received_events",
            "repos_url": "https://api.github.com/users/adii2ma/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/adii2ma/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/adii2ma/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/adii2ma",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/145839268?v=4",
            "contributions": 6,
            "events_url": "https://api.github.com/users/SarupaVL/events{/privacy}",
            "followers_url": "https://api.github.com/users/SarupaVL/followers",
            "following_url": "https://api.github.com/users/SarupaVL/following{/other_user}",
            "gists_url": "https://api.github.com/users/SarupaVL/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/SarupaVL",
            "id": 145839268,
            "login": "SarupaVL",
            "node_id": "U_kgDOCLFUpA",
            "organizations_url": "https://api.github.com/users/SarupaVL/orgs",
            "received_events_url": "https://api.github.com/users/SarupaVL/received_events",
            "repos_url": "https://api.github.com/users/SarupaVL/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/SarupaVL/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/SarupaVL/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/SarupaVL",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/115440133?v=4",
            "contributions": 5,
            "events_url": "https://api.github.com/users/tanushgolwala/events{/privacy}",
            "followers_url": "https://api.github.com/users/tanushgolwala/followers",
            "following_url": "https://api.github.com/users/tanushgolwala/following{/other_user}",
            "gists_url": "https://api.github.com/users/tanushgolwala/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/tanushgolwala",
            "id": 115440133,
            "login": "tanushgolwala",
            "node_id": "U_kgDOBuF6BQ",
            "organizations_url": "https://api.github.com/users/tanushgolwala/orgs",
            "received_events_url": "https://api.github.com/users/tanushgolwala/received_events",
            "repos_url": "https://api.github.com/users/tanushgolwala/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/tanushgolwala/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/tanushgolwala/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/tanushgolwala",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/87973905?v=4",
            "contributions": 4,
            "events_url": "https://api.github.com/users/technical-director-acmvit/events{/privacy}",
            "followers_url": "https://api.github.com/users/technical-director-acmvit/followers",
            "following_url": "https://api.github.com/users/technical-director-acmvit/following{/other_user}",
            "gists_url": "https://api.github.com/users/technical-director-acmvit/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/technical-director-acmvit",
            "id": 87973905,
            "login": "technical-director-acmvit",
            "node_id": "MDQ6VXNlcjg3OTczOTA1",
            "organizations_url": "https://api.github.com/users/technical-director-acmvit/orgs",
            "received_events_url": "https://api.github.com/users/technical-director-acmvit/received_events",
            "repos_url": "https://api.github.com/users/technical-director-acmvit/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/technical-director-acmvit/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/technical-director-acmvit/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/technical-director-acmvit",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/64310381?v=4",
            "contributions": 4,
            "events_url": "https://api.github.com/users/bhatiyavansh/events{/privacy}",
            "followers_url": "https://api.github.com/users/bhatiyavansh/followers",
            "following_url": "https://api.github.com/users/bhatiyavansh/following{/other_user}",
            "gists_url": "https://api.github.com/users/bhatiyavansh/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/bhatiyavansh",
            "id": 64310381,
            "login": "bhatiyavansh",
            "node_id": "MDQ6VXNlcjY0MzEwMzgx",
            "organizations_url": "https://api.github.com/users/bhatiyavansh/orgs",
            "received_events_url": "https://api.github.com/users/bhatiyavansh/received_events",
            "repos_url": "https://api.github.com/users/bhatiyavansh/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/bhatiyavansh/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bhatiyavansh/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/bhatiyavansh",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/164759561?v=4",
            "contributions": 3,
            "events_url": "https://api.github.com/users/drashtishukla/events{/privacy}",
            "followers_url": "https://api.github.com/users/drashtishukla/followers",
            "following_url": "https://api.github.com/users/drashtishukla/following{/other_user}",
            "gists_url": "https://api.github.com/users/drashtishukla/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/drashtishukla",
            "id": 164759561,
            "login": "drashtishukla",
            "node_id": "U_kgDOCdIICQ",
            "organizations_url": "https://api.github.com/users/drashtishukla/orgs",
            "received_events_url": "https://api.github.com/users/drashtishukla/received_events",
            "repos_url": "https://api.github.com/users/drashtishukla/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/drashtishukla/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/drashtishukla/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/drashtishukla",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/52027622?v=4",
            "contributions": 3,
            "events_url": "https://api.github.com/users/theg1239/events{/privacy}",
            "followers_url": "https://api.github.com/users/theg1239/followers",
            "following_url": "https://api.github.com/users/theg1239/following{/other_user}",
            "gists_url": "https://api.github.com/users/theg1239/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/theg1239",
            "id": 52027622,
            "login": "theg1239",
            "node_id": "MDQ6VXNlcjUyMDI3NjIy",
            "organizations_url": "https://api.github.com/users/theg1239/orgs",
            "received_events_url": "https://api.github.com/users/theg1239/received_events",
            "repos_url": "https://api.github.com/users/theg1239/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/theg1239/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/theg1239/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/theg1239",
            "user_view_type": "public"
        },
        {
            "avatar_url": "https://avatars.githubusercontent.com/u/130529816?v=4",
            "contributions": 2,
            "events_url": "https://api.github.com/users/eshita241/events{/privacy}",
            "followers_url": "https://api.github.com/users/eshita241/followers",
            "following_url": "https://api.github.com/users/eshita241/following{/other_user}",
            "gists_url": "https://api.github.com/users/eshita241/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/eshita241",
            "id": 130529816,
            "login": "eshita241",
            "node_id": "U_kgDOB8e6GA",
            "organizations_url": "https://api.github.com/users/eshita241/orgs",
            "received_events_url": "https://api.github.com/users/eshita241/received_events",
            "repos_url": "https://api.github.com/users/eshita241/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/eshita241/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/eshita241/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/eshita241",
            "user_view_type": "public"
        }
    ],
    "languages": {
        "CSS": 1207,
        "JavaScript": 1581,
        "TypeScript": 413281
    },
    "metadata": {
        "allow_auto_merge": false,
        "allow_forking": true,
        "allow_merge_commit": true,
        "allow_rebase_merge": true,
        "allow_squash_merge": true,
        "allow_update_branch": false,
        "archive_url": "https://api.github.com/repos/theg1239/ExamCooker/{archive_format}{/ref}",
        "archived": false,
        "assignees_url": "https://api.github.com/repos/theg1239/ExamCooker/assignees{/user}",
        "blobs_url": "https://api.github.com/repos/theg1239/ExamCooker/git/blobs{/sha}",
        "branches_url": "https://api.github.com/repos/theg1239/ExamCooker/branches{/branch}",
        "clone_url": "https://github.com/theg1239/ExamCooker.git",
        "collaborators_url": "https://api.github.com/repos/theg1239/ExamCooker/collaborators{/collaborator}",
        "comments_url": "https://api.github.com/repos/theg1239/ExamCooker/comments{/number}",
        "commits_url": "https://api.github.com/repos/theg1239/ExamCooker/commits{/sha}",
        "compare_url": "https://api.github.com/repos/theg1239/ExamCooker/compare/{base}...{head}",
        "contents_url": "https://api.github.com/repos/theg1239/ExamCooker/contents/{+path}",
        "contributors_url": "https://api.github.com/repos/theg1239/ExamCooker/contributors",
        "created_at": "2024-10-06T18:43:10Z",
        "default_branch": "main",
        "delete_branch_on_merge": false,
        "deployments_url": "https://api.github.com/repos/theg1239/ExamCooker/deployments",
        "description": null,
        "disabled": false,
        "downloads_url": "https://api.github.com/repos/theg1239/ExamCooker/downloads",
        "events_url": "https://api.github.com/repos/theg1239/ExamCooker/events",
        "fork": true,
        "forks": 0,
        "forks_count": 0,
        "forks_url": "https://api.github.com/repos/theg1239/ExamCooker/forks",
        "full_name": "theg1239/ExamCooker",
        "git_commits_url": "https://api.github.com/repos/theg1239/ExamCooker/git/commits{/sha}",
        "git_refs_url": "https://api.github.com/repos/theg1239/ExamCooker/git/refs{/sha}",
        "git_tags_url": "https://api.github.com/repos/theg1239/ExamCooker/git/tags{/sha}",
        "git_url": "git://github.com/theg1239/ExamCooker.git",
        "has_discussions": false,
        "has_downloads": true,
        "has_issues": false,
        "has_pages": false,
        "has_projects": true,
        "has_wiki": true,
        "homepage": null,
        "hooks_url": "https://api.github.com/repos/theg1239/ExamCooker/hooks",
        "html_url": "https://github.com/theg1239/ExamCooker",
        "id": 868583383,
        "is_template": false,
        "issue_comment_url": "https://api.github.com/repos/theg1239/ExamCooker/issues/comments{/number}",
        "issue_events_url": "https://api.github.com/repos/theg1239/ExamCooker/issues/events{/number}",
        "issues_url": "https://api.github.com/repos/theg1239/ExamCooker/issues{/number}",
        "keys_url": "https://api.github.com/repos/theg1239/ExamCooker/keys{/key_id}",
        "labels_url": "https://api.github.com/repos/theg1239/ExamCooker/labels{/name}",
        "language": "TypeScript",
        "languages_url": "https://api.github.com/repos/theg1239/ExamCooker/languages",
        "license": null,
        "merge_commit_message": "PR_TITLE",
        "merge_commit_title": "MERGE_MESSAGE",
        "merges_url": "https://api.github.com/repos/theg1239/ExamCooker/merges",
        "milestones_url": "https://api.github.com/repos/theg1239/ExamCooker/milestones{/number}",
        "mirror_url": null,
        "name": "ExamCooker",
        "network_count": 17,
        "node_id": "R_kgDOM8WH1w",
        "notifications_url": "https://api.github.com/repos/theg1239/ExamCooker/notifications{?since,all,participating}",
        "open_issues": 0,
        "open_issues_count": 0,
        "owner": {
            "avatar_url": "https://avatars.githubusercontent.com/u/52027622?v=4",
            "events_url": "https://api.github.com/users/theg1239/events{/privacy}",
            "followers_url": "https://api.github.com/users/theg1239/followers",
            "following_url": "https://api.github.com/users/theg1239/following{/other_user}",
            "gists_url": "https://api.github.com/users/theg1239/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/theg1239",
            "id": 52027622,
            "login": "theg1239",
            "node_id": "MDQ6VXNlcjUyMDI3NjIy",
            "organizations_url": "https://api.github.com/users/theg1239/orgs",
            "received_events_url": "https://api.github.com/users/theg1239/received_events",
            "repos_url": "https://api.github.com/users/theg1239/repos",
            "site_admin": false,
            "starred_url": "https://api.github.com/users/theg1239/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/theg1239/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/theg1239",
            "user_view_type": "public"
        },
        "parent": {
            "allow_forking": true,
            "archive_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/{archive_format}{/ref}",
            "archived": false,
            "assignees_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/assignees{/user}",
            "blobs_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/blobs{/sha}",
            "branches_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/branches{/branch}",
            "clone_url": "https://github.com/ACM-VIT/ExamCooker-2024.git",
            "collaborators_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/collaborators{/collaborator}",
            "comments_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/comments{/number}",
            "commits_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/commits{/sha}",
            "compare_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/compare/{base}...{head}",
            "contents_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/contents/{+path}",
            "contributors_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/contributors",
            "created_at": "2024-06-07T11:06:39Z",
            "default_branch": "main",
            "deployments_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/deployments",
            "description": null,
            "disabled": false,
            "downloads_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/downloads",
            "events_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/events",
            "fork": false,
            "forks": 17,
            "forks_count": 17,
            "forks_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/forks",
            "full_name": "ACM-VIT/ExamCooker-2024",
            "git_commits_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/commits{/sha}",
            "git_refs_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/refs{/sha}",
            "git_tags_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/tags{/sha}",
            "git_url": "git://github.com/ACM-VIT/ExamCooker-2024.git",
            "has_discussions": false,
            "has_downloads": true,
            "has_issues": true,
            "has_pages": false,
            "has_projects": true,
            "has_wiki": true,
            "homepage": "https://examcooker.acmvit.in",
            "hooks_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/hooks",
            "html_url": "https://github.com/ACM-VIT/ExamCooker-2024",
            "id": 811816157,
            "is_template": false,
            "issue_comment_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/issues/comments{/number}",
            "issue_events_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/issues/events{/number}",
            "issues_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/issues{/number}",
            "keys_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/keys{/key_id}",
            "labels_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/labels{/name}",
            "language": "TypeScript",
            "languages_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/languages",
            "license": null,
            "merges_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/merges",
            "milestones_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/milestones{/number}",
            "mirror_url": null,
            "name": "ExamCooker-2024",
            "node_id": "R_kgDOMGNU3Q",
            "notifications_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/notifications{?since,all,participating}",
            "open_issues": 0,
            "open_issues_count": 0,
            "owner": {
                "avatar_url": "https://avatars.githubusercontent.com/u/16447719?v=4",
                "events_url": "https://api.github.com/users/ACM-VIT/events{/privacy}",
                "followers_url": "https://api.github.com/users/ACM-VIT/followers",
                "following_url": "https://api.github.com/users/ACM-VIT/following{/other_user}",
                "gists_url": "https://api.github.com/users/ACM-VIT/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/ACM-VIT",
                "id": 16447719,
                "login": "ACM-VIT",
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2NDQ3NzE5",
                "organizations_url": "https://api.github.com/users/ACM-VIT/orgs",
                "received_events_url": "https://api.github.com/users/ACM-VIT/received_events",
                "repos_url": "https://api.github.com/users/ACM-VIT/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/ACM-VIT/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ACM-VIT/subscriptions",
                "type": "Organization",
                "url": "https://api.github.com/users/ACM-VIT",
                "user_view_type": "public"
            },
            "private": false,
            "pulls_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/pulls{/number}",
            "pushed_at": "2025-03-15T09:44:00Z",
            "releases_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/releases{/id}",
            "size": 1660,
            "ssh_url": "git@github.com:ACM-VIT/ExamCooker-2024.git",
            "stargazers_count": 0,
            "stargazers_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/stargazers",
            "statuses_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/statuses/{sha}",
            "subscribers_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/subscribers",
            "subscription_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/subscription",
            "svn_url": "https://github.com/ACM-VIT/ExamCooker-2024",
            "tags_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/tags",
            "teams_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/teams",
            "topics": [],
            "trees_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/trees{/sha}",
            "updated_at": "2025-03-15T09:44:04Z",
            "url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024",
            "visibility": "public",
            "watchers": 0,
            "watchers_count": 0,
            "web_commit_signoff_required": false
        },
        "permissions": {
            "admin": true,
            "maintain": true,
            "pull": true,
            "push": true,
            "triage": true
        },
        "private": false,
        "pulls_url": "https://api.github.com/repos/theg1239/ExamCooker/pulls{/number}",
        "pushed_at": "2025-01-27T21:52:09Z",
        "releases_url": "https://api.github.com/repos/theg1239/ExamCooker/releases{/id}",
        "security_and_analysis": {
            "dependabot_security_updates": {
                "status": "disabled"
            },
            "secret_scanning": {
                "status": "enabled"
            },
            "secret_scanning_non_provider_patterns": {
                "status": "disabled"
            },
            "secret_scanning_push_protection": {
                "status": "enabled"
            },
            "secret_scanning_validity_checks": {
                "status": "disabled"
            }
        },
        "size": 1680,
        "source": {
            "allow_forking": true,
            "archive_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/{archive_format}{/ref}",
            "archived": false,
            "assignees_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/assignees{/user}",
            "blobs_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/blobs{/sha}",
            "branches_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/branches{/branch}",
            "clone_url": "https://github.com/ACM-VIT/ExamCooker-2024.git",
            "collaborators_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/collaborators{/collaborator}",
            "comments_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/comments{/number}",
            "commits_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/commits{/sha}",
            "compare_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/compare/{base}...{head}",
            "contents_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/contents/{+path}",
            "contributors_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/contributors",
            "created_at": "2024-06-07T11:06:39Z",
            "default_branch": "main",
            "deployments_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/deployments",
            "description": null,
            "disabled": false,
            "downloads_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/downloads",
            "events_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/events",
            "fork": false,
            "forks": 17,
            "forks_count": 17,
            "forks_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/forks",
            "full_name": "ACM-VIT/ExamCooker-2024",
            "git_commits_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/commits{/sha}",
            "git_refs_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/refs{/sha}",
            "git_tags_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/tags{/sha}",
            "git_url": "git://github.com/ACM-VIT/ExamCooker-2024.git",
            "has_discussions": false,
            "has_downloads": true,
            "has_issues": true,
            "has_pages": false,
            "has_projects": true,
            "has_wiki": true,
            "homepage": "https://examcooker.acmvit.in",
            "hooks_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/hooks",
            "html_url": "https://github.com/ACM-VIT/ExamCooker-2024",
            "id": 811816157,
            "is_template": false,
            "issue_comment_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/issues/comments{/number}",
            "issue_events_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/issues/events{/number}",
            "issues_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/issues{/number}",
            "keys_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/keys{/key_id}",
            "labels_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/labels{/name}",
            "language": "TypeScript",
            "languages_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/languages",
            "license": null,
            "merges_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/merges",
            "milestones_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/milestones{/number}",
            "mirror_url": null,
            "name": "ExamCooker-2024",
            "node_id": "R_kgDOMGNU3Q",
            "notifications_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/notifications{?since,all,participating}",
            "open_issues": 0,
            "open_issues_count": 0,
            "owner": {
                "avatar_url": "https://avatars.githubusercontent.com/u/16447719?v=4",
                "events_url": "https://api.github.com/users/ACM-VIT/events{/privacy}",
                "followers_url": "https://api.github.com/users/ACM-VIT/followers",
                "following_url": "https://api.github.com/users/ACM-VIT/following{/other_user}",
                "gists_url": "https://api.github.com/users/ACM-VIT/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/ACM-VIT",
                "id": 16447719,
                "login": "ACM-VIT",
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2NDQ3NzE5",
                "organizations_url": "https://api.github.com/users/ACM-VIT/orgs",
                "received_events_url": "https://api.github.com/users/ACM-VIT/received_events",
                "repos_url": "https://api.github.com/users/ACM-VIT/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/ACM-VIT/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ACM-VIT/subscriptions",
                "type": "Organization",
                "url": "https://api.github.com/users/ACM-VIT",
                "user_view_type": "public"
            },
            "private": false,
            "pulls_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/pulls{/number}",
            "pushed_at": "2025-03-15T09:44:00Z",
            "releases_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/releases{/id}",
            "size": 1660,
            "ssh_url": "git@github.com:ACM-VIT/ExamCooker-2024.git",
            "stargazers_count": 0,
            "stargazers_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/stargazers",
            "statuses_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/statuses/{sha}",
            "subscribers_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/subscribers",
            "subscription_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/subscription",
            "svn_url": "https://github.com/ACM-VIT/ExamCooker-2024",
            "tags_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/tags",
            "teams_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/teams",
            "topics": [],
            "trees_url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024/git/trees{/sha}",
            "updated_at": "2025-03-15T09:44:04Z",
            "url": "https://api.github.com/repos/ACM-VIT/ExamCooker-2024",
            "visibility": "public",
            "watchers": 0,
            "watchers_count": 0,
            "web_commit_signoff_required": false
        },
        "squash_merge_commit_message": "COMMIT_MESSAGES",
        "squash_merge_commit_title": "COMMIT_OR_PR_TITLE",
        "ssh_url": "git@github.com:theg1239/ExamCooker.git",
        "stargazers_count": 0,
        "stargazers_url": "https://api.github.com/repos/theg1239/ExamCooker/stargazers",
        "statuses_url": "https://api.github.com/repos/theg1239/ExamCooker/statuses/{sha}",
        "subscribers_count": 0,
        "subscribers_url": "https://api.github.com/repos/theg1239/ExamCooker/subscribers",
        "subscription_url": "https://api.github.com/repos/theg1239/ExamCooker/subscription",
        "svn_url": "https://github.com/theg1239/ExamCooker",
        "tags_url": "https://api.github.com/repos/theg1239/ExamCooker/tags",
        "teams_url": "https://api.github.com/repos/theg1239/ExamCooker/teams",
        "temp_clone_token": "",
        "topics": [],
        "trees_url": "https://api.github.com/repos/theg1239/ExamCooker/git/trees{/sha}",
        "updated_at": "2025-01-27T21:52:14Z",
        "url": "https://api.github.com/repos/theg1239/ExamCooker",
        "use_squash_pr_title_as_default": false,
        "visibility": "public",
        "watchers": 0,
        "watchers_count": 0,
        "web_commit_signoff_required": false
    },
    "participation": {
        "all": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1,
            22,
            59,
            190,
            33,
            122,
            82,
            7,
            8,
            2,
            21,
            2,
            0,
            0,
            0,
            0,
            12,
            50,
            0,
            0,
            34,
            3,
            0,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            12,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "owner": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    "tags": []
}

    return NextResponse.json(mockData)
  } catch (error) {
    console.error("Error fetching repository data:", error)
    return NextResponse.json({ error: "Failed to fetch repository data" }, { status: 500 })
  }
}

