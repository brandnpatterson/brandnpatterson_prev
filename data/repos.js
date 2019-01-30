module.exports = [
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/brandnpatterson',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"3d9a831c214d779fdf0960c8cd395723"',
      'last-modified': 'Tue, 29 Jan 2019 15:30:57 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F313:3117:2876B7:54D473:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '29',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 165007054,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNjUwMDcwNTQ=',
      name: 'brandnpatterson',
      full_name: 'brandnpatterson/brandnpatterson',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/brandnpatterson',
      description: 'Portfolio built with Node, MySQL, React, and Redux',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/brandnpatterson',
      forks_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/teams',
      hooks_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/brandnpatterson/deployments',
      created_at: '2019-01-10T06:53:37Z',
      updated_at: '2019-01-29T15:30:57Z',
      pushed_at: '2019-01-29T15:30:56Z',
      git_url: 'git://github.com/brandnpatterson/brandnpatterson.git',
      ssh_url: 'git@github.com:brandnpatterson/brandnpatterson.git',
      clone_url: 'https://github.com/brandnpatterson/brandnpatterson.git',
      svn_url: 'https://github.com/brandnpatterson/brandnpatterson',
      homepage: 'https://brandnpatterson.herokuapp.com/',
      size: 714,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/runebear',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"a0d1ffceb475c4614ad645422149c14b"',
      'last-modified': 'Thu, 24 Jan 2019 20:10:01 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F312:22CC:26C49B:5278A0:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '30',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 127609843,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjc2MDk4NDM=',
      name: 'runebear',
      full_name: 'brandnpatterson/runebear',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/runebear',
      description:
        'Digital literary magazine built with React, React Router, and Styled Components that uses a headless CMS with the WP REST API',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/runebear',
      forks_url: 'https://api.github.com/repos/brandnpatterson/runebear/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/runebear/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/runebear/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/brandnpatterson/runebear/teams',
      hooks_url: 'https://api.github.com/repos/brandnpatterson/runebear/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/runebear/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/runebear/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/runebear/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/runebear/branches{/branch}',
      tags_url: 'https://api.github.com/repos/brandnpatterson/runebear/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/runebear/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/runebear/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/runebear/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/runebear/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/runebear/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/runebear/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/runebear/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/runebear/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/runebear/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/runebear/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/runebear/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/runebear/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/runebear/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/runebear/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/runebear/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/runebear/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/runebear/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/runebear/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/runebear/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/runebear/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/runebear/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/runebear/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/runebear/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/runebear/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/runebear/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/runebear/deployments',
      created_at: '2018-04-01T08:06:04Z',
      updated_at: '2019-01-24T20:10:01Z',
      pushed_at: '2019-01-24T20:09:59Z',
      git_url: 'git://github.com/brandnpatterson/runebear.git',
      ssh_url: 'git@github.com:brandnpatterson/runebear.git',
      clone_url: 'https://github.com/brandnpatterson/runebear.git',
      svn_url: 'https://github.com/brandnpatterson/runebear',
      homepage: 'http://runebear.com/',
      size: 874,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/coriander',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"22c423854427ac654835ce18b8bc44ef"',
      'last-modified': 'Thu, 24 Jan 2019 20:13:36 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F315:0D79:129798:2E3B19:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '32',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 159451879,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTk0NTE4Nzk=',
      name: 'coriander',
      full_name: 'brandnpatterson/coriander',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/coriander',
      description: 'Form validation library built with JavaScript',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/coriander',
      forks_url: 'https://api.github.com/repos/brandnpatterson/coriander/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/coriander/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/coriander/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/brandnpatterson/coriander/teams',
      hooks_url: 'https://api.github.com/repos/brandnpatterson/coriander/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/coriander/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/coriander/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/coriander/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/coriander/branches{/branch}',
      tags_url: 'https://api.github.com/repos/brandnpatterson/coriander/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/coriander/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/coriander/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/coriander/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/coriander/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/coriander/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/coriander/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/coriander/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/coriander/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/coriander/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/coriander/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/coriander/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/coriander/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/coriander/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/coriander/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/coriander/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/coriander/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/coriander/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/coriander/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/coriander/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/coriander/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/coriander/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/coriander/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/coriander/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/coriander/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/coriander/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/coriander/deployments',
      created_at: '2018-11-28T06:03:58Z',
      updated_at: '2019-01-24T20:13:36Z',
      pushed_at: '2019-01-24T20:13:35Z',
      git_url: 'git://github.com/brandnpatterson/coriander.git',
      ssh_url: 'git@github.com:brandnpatterson/coriander.git',
      clone_url: 'https://github.com/brandnpatterson/coriander.git',
      svn_url: 'https://github.com/brandnpatterson/coriander',
      homepage: 'http://coriander.surge.sh/',
      size: 1019,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/form-component',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"0e39784cff8fc76a7e8037bfae8f3638"',
      'last-modified': 'Thu, 24 Jan 2019 20:15:23 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F314:68D2:20DFE8:476C91:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '33',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 100307289,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMDAzMDcyODk=',
      name: 'form-component',
      full_name: 'brandnpatterson/form-component',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/form-component',
      description:
        'Form Submission to a REST API built with Ruby on Rails and PostgreSQL',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/form-component',
      forks_url:
        'https://api.github.com/repos/brandnpatterson/form-component/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/form-component/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/form-component/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/brandnpatterson/form-component/teams',
      hooks_url:
        'https://api.github.com/repos/brandnpatterson/form-component/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/form-component/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/form-component/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/form-component/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/form-component/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/brandnpatterson/form-component/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/form-component/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/form-component/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/form-component/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/form-component/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/form-component/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/form-component/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/form-component/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/form-component/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/form-component/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/form-component/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/form-component/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/form-component/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/form-component/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/form-component/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/form-component/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/form-component/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/form-component/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/form-component/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/form-component/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/form-component/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/form-component/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/form-component/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/form-component/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/form-component/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/form-component/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/form-component/deployments',
      created_at: '2017-08-14T20:35:19Z',
      updated_at: '2019-01-24T20:15:23Z',
      pushed_at: '2019-01-24T20:15:22Z',
      git_url: 'git://github.com/brandnpatterson/form-component.git',
      ssh_url: 'git@github.com:brandnpatterson/form-component.git',
      clone_url: 'https://github.com/brandnpatterson/form-component.git',
      svn_url: 'https://github.com/brandnpatterson/form-component',
      homepage: 'http://form-component.herokuapp.com/',
      size: 1948,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'Ruby',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/contact-bp',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"af4676493e89ef172bdcf1e87e96caad"',
      'last-modified': 'Thu, 24 Jan 2019 20:16:13 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F316:5115:E90EF:28473C:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '25',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 140797350,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDA3OTczNTA=',
      name: 'contact-bp',
      full_name: 'brandnpatterson/contact-bp',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/contact-bp',
      description: 'Contact Form built with PHP and Sendgrid',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/contact-bp',
      forks_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/teams',
      hooks_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/branches{/branch}',
      tags_url: 'https://api.github.com/repos/brandnpatterson/contact-bp/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/contact-bp/deployments',
      created_at: '2018-07-13T04:35:27Z',
      updated_at: '2019-01-24T20:16:13Z',
      pushed_at: '2019-01-24T20:16:12Z',
      git_url: 'git://github.com/brandnpatterson/contact-bp.git',
      ssh_url: 'git@github.com:brandnpatterson/contact-bp.git',
      clone_url: 'https://github.com/brandnpatterson/contact-bp.git',
      svn_url: 'https://github.com/brandnpatterson/contact-bp',
      homepage: 'https://contact-bp.herokuapp.com/',
      size: 54,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'PHP',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/hello-webpack',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"32ce8d43fb20edb3af912b3d6438be67"',
      'last-modified': 'Thu, 24 Jan 2019 20:18:20 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F317:3953:20FA27:47C6AA:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '26',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 128719995,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjg3MTk5OTU=',
      name: 'hello-webpack',
      full_name: 'brandnpatterson/hello-webpack',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/hello-webpack',
      description: 'front end dev env using webpack',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/hello-webpack',
      forks_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/teams',
      hooks_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/hello-webpack/deployments',
      created_at: '2018-04-09T05:40:36Z',
      updated_at: '2019-01-24T20:18:20Z',
      pushed_at: '2019-01-24T20:18:19Z',
      git_url: 'git://github.com/brandnpatterson/hello-webpack.git',
      ssh_url: 'git@github.com:brandnpatterson/hello-webpack.git',
      clone_url: 'https://github.com/brandnpatterson/hello-webpack.git',
      svn_url: 'https://github.com/brandnpatterson/hello-webpack',
      homepage: 'http://hello-webpack.surge.sh',
      size: 614,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 2
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/shs-repo-updater',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"4e41dbe8f46696ef2ca6d99153731164"',
      'last-modified': 'Wed, 19 Dec 2018 21:10:41 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F318:5116:360243:764B61:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '24',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 113091634,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTMwOTE2MzQ=',
      name: 'shs-repo-updater',
      full_name: 'brandnpatterson/shs-repo-updater',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/shs-repo-updater',
      description: 'automate setting up shs localhost',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/shs-repo-updater',
      forks_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/teams',
      hooks_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/shs-repo-updater/deployments',
      created_at: '2017-12-04T20:30:23Z',
      updated_at: '2018-12-19T21:10:41Z',
      pushed_at: '2018-12-19T21:10:17Z',
      git_url: 'git://github.com/brandnpatterson/shs-repo-updater.git',
      ssh_url: 'git@github.com:brandnpatterson/shs-repo-updater.git',
      clone_url: 'https://github.com/brandnpatterson/shs-repo-updater.git',
      svn_url: 'https://github.com/brandnpatterson/shs-repo-updater',
      homepage: '',
      size: 26,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'Shell',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: null,
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/filter-js',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"0f49ff3970be3dc0bdeed7a472799ea3"',
      'last-modified': 'Wed, 03 Oct 2018 21:29:47 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F319:1474:398A29:71C657:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '22',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 146071898,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDYwNzE4OTg=',
      name: 'filter-js',
      full_name: 'brandnpatterson/filter-js',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/filter-js',
      description: 'filter with Javascript',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/filter-js',
      forks_url: 'https://api.github.com/repos/brandnpatterson/filter-js/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/brandnpatterson/filter-js/teams',
      hooks_url: 'https://api.github.com/repos/brandnpatterson/filter-js/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/branches{/branch}',
      tags_url: 'https://api.github.com/repos/brandnpatterson/filter-js/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/filter-js/deployments',
      created_at: '2018-08-25T06:35:15Z',
      updated_at: '2018-10-03T21:29:47Z',
      pushed_at: '2018-09-12T00:45:18Z',
      git_url: 'git://github.com/brandnpatterson/filter-js.git',
      ssh_url: 'git@github.com:brandnpatterson/filter-js.git',
      clone_url: 'https://github.com/brandnpatterson/filter-js.git',
      svn_url: 'https://github.com/brandnpatterson/filter-js',
      homepage: 'http://filter-js.surge.sh/',
      size: 148,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/dev-conn-ector',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"561a12409cb13982df0c7272e81b7354"',
      'last-modified': 'Sun, 08 Jul 2018 04:25:37 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F31A:797C:1FC430:490CC5:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '23',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 138944999,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzg5NDQ5OTk=',
      name: 'dev-conn-ector',
      full_name: 'brandnpatterson/dev-conn-ector',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/dev-conn-ector',
      description: 'Social network for developers',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/dev-conn-ector',
      forks_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/teams',
      hooks_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/dev-conn-ector/deployments',
      created_at: '2018-06-27T23:57:59Z',
      updated_at: '2018-07-08T04:25:37Z',
      pushed_at: '2018-07-08T04:25:36Z',
      git_url: 'git://github.com/brandnpatterson/dev-conn-ector.git',
      ssh_url: 'git@github.com:brandnpatterson/dev-conn-ector.git',
      clone_url: 'https://github.com/brandnpatterson/dev-conn-ector.git',
      svn_url: 'https://github.com/brandnpatterson/dev-conn-ector',
      homepage: 'http://dev-conn-ector.herokuapp.com',
      size: 725,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/emoji-tac-toe',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"b30f7b9f735be90ca6f3e558864e2936"',
      'last-modified': 'Tue, 29 May 2018 17:45:44 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F31B:0592:6165C9:C1183B:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '28',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 95049582,
      node_id: 'MDEwOlJlcG9zaXRvcnk5NTA0OTU4Mg==',
      name: 'emoji-tac-toe',
      full_name: 'brandnpatterson/emoji-tac-toe',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/emoji-tac-toe',
      description: 'Built with JavaScript ES6',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/emoji-tac-toe',
      forks_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/teams',
      hooks_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/deployments',
      created_at: '2017-06-21T21:55:52Z',
      updated_at: '2018-05-29T17:45:44Z',
      pushed_at: '2018-03-06T02:34:16Z',
      git_url: 'git://github.com/brandnpatterson/emoji-tac-toe.git',
      ssh_url: 'git@github.com:brandnpatterson/emoji-tac-toe.git',
      clone_url: 'https://github.com/brandnpatterson/emoji-tac-toe.git',
      svn_url: 'https://github.com/brandnpatterson/emoji-tac-toe',
      homepage: 'https://emoji-tac-toe.surge.sh',
      size: 360,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/flutter-press',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"2adaa688ccf86315d8d0b8bd56da4838"',
      'last-modified': 'Wed, 02 Aug 2017 19:48:38 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F31C:5114:1DA70E:49F29E:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '27',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 91203618,
      node_id: 'MDEwOlJlcG9zaXRvcnk5MTIwMzYxOA==',
      name: 'flutter-press',
      full_name: 'brandnpatterson/flutter-press',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/flutter-press',
      description: 'Built with PHP Slim, MySQL, Illuminate, & JavaScript',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/flutter-press',
      forks_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/teams',
      hooks_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/flutter-press/deployments',
      created_at: '2017-05-13T21:24:28Z',
      updated_at: '2017-08-02T19:48:38Z',
      pushed_at: '2017-08-09T20:58:52Z',
      git_url: 'git://github.com/brandnpatterson/flutter-press.git',
      ssh_url: 'git@github.com:brandnpatterson/flutter-press.git',
      clone_url: 'https://github.com/brandnpatterson/flutter-press.git',
      svn_url: 'https://github.com/brandnpatterson/flutter-press',
      homepage: 'http://www.flutter.press/',
      size: 3650,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  },
  {
    status: 200,
    url: 'https://api.github.com/repos/brandnpatterson/crawford-notch',
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers':
        'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
      'cache-control': 'public, max-age=60, s-maxage=60',
      connection: 'close',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Wed, 30 Jan 2019 02:48:47 GMT',
      etag: 'W/"c21c338cb14cc68907a5b560a5135c8a"',
      'last-modified': 'Fri, 21 Jul 2017 00:44:34 GMT',
      'referrer-policy':
        'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      status: '200 OK',
      'strict-transport-security':
        'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': 'F31D:2EC4:9DB1E:1944DB:5C51108F',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '31',
      'x-ratelimit-reset': '1548819790',
      'x-xss-protection': '1; mode=block'
    },
    data: {
      id: 87583825,
      node_id: 'MDEwOlJlcG9zaXRvcnk4NzU4MzgyNQ==',
      name: 'crawford-notch',
      full_name: 'brandnpatterson/crawford-notch',
      private: false,
      owner: {
        login: 'brandnpatterson',
        id: 19142698,
        node_id: 'MDQ6VXNlcjE5MTQyNjk4',
        avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/brandnpatterson',
        html_url: 'https://github.com/brandnpatterson',
        followers_url: 'https://api.github.com/users/brandnpatterson/followers',
        following_url:
          'https://api.github.com/users/brandnpatterson/following{/other_user}',
        gists_url:
          'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/brandnpatterson/subscriptions',
        organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
        repos_url: 'https://api.github.com/users/brandnpatterson/repos',
        events_url:
          'https://api.github.com/users/brandnpatterson/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/brandnpatterson/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/brandnpatterson/crawford-notch',
      description: 'Built with jQuery, Handlebars, & Instafeed',
      fork: false,
      url: 'https://api.github.com/repos/brandnpatterson/crawford-notch',
      forks_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/forks',
      keys_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/teams',
      hooks_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/hooks',
      issue_events_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/events',
      assignees_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/tags',
      blobs_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/languages',
      stargazers_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/stargazers',
      contributors_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/contributors',
      subscribers_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/subscribers',
      subscription_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/subscription',
      commits_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/merges',
      archive_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/downloads',
      issues_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/labels{/name}',
      releases_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/brandnpatterson/crawford-notch/deployments',
      created_at: '2017-04-07T20:20:26Z',
      updated_at: '2017-07-21T00:44:34Z',
      pushed_at: '2017-06-25T17:03:04Z',
      git_url: 'git://github.com/brandnpatterson/crawford-notch.git',
      ssh_url: 'git@github.com:brandnpatterson/crawford-notch.git',
      clone_url: 'https://github.com/brandnpatterson/crawford-notch.git',
      svn_url: 'https://github.com/brandnpatterson/crawford-notch',
      homepage: 'http://crawford-notch.surge.sh/',
      size: 41723,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      network_count: 0,
      subscribers_count: 1
    }
  }
];

exports.old = [
  {
    id: 86748350,
    node_id: 'MDEwOlJlcG9zaXRvcnk4Njc0ODM1MA==',
    name: 'accounting.js',
    full_name: 'brandnpatterson/accounting.js',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/accounting.js',
    description:
      'A lightweight JavaScript library for number, money and currency formatting - fully localisable, zero dependencies.',
    fork: true,
    url: 'https://api.github.com/repos/brandnpatterson/accounting.js',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/accounting.js/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/accounting.js/deployments',
    created_at: '2017-03-30T21:00:25Z',
    updated_at: '2017-03-30T21:00:27Z',
    pushed_at: '2017-04-04T16:48:16Z',
    git_url: 'git://github.com/brandnpatterson/accounting.js.git',
    ssh_url: 'git@github.com:brandnpatterson/accounting.js.git',
    clone_url: 'https://github.com/brandnpatterson/accounting.js.git',
    svn_url: 'https://github.com/brandnpatterson/accounting.js',
    homepage: 'http://openexchangerates.github.io/accounting.js',
    size: 242,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 165007054,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjUwMDcwNTQ=',
    name: 'brandnpatterson',
    full_name: 'brandnpatterson/brandnpatterson',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/brandnpatterson',
    description: 'Portfolio built with Node, MySQL, React, and Redux',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/brandnpatterson',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson/deployments',
    created_at: '2019-01-10T06:53:37Z',
    updated_at: '2019-01-29T14:15:51Z',
    pushed_at: '2019-01-29T14:15:49Z',
    git_url: 'git://github.com/brandnpatterson/brandnpatterson.git',
    ssh_url: 'git@github.com:brandnpatterson/brandnpatterson.git',
    clone_url: 'https://github.com/brandnpatterson/brandnpatterson.git',
    svn_url: 'https://github.com/brandnpatterson/brandnpatterson',
    homepage: 'https://brandnpatterson.herokuapp.com/',
    size: 683,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 76817181,
    node_id: 'MDEwOlJlcG9zaXRvcnk3NjgxNzE4MQ==',
    name: 'brandnpatterson.surge.sh',
    full_name: 'brandnpatterson/brandnpatterson.surge.sh',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/brandnpatterson.surge.sh',
    description: 'Single Page Application built with Pug (PHP version also)',
    fork: false,
    url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson.surge.sh/deployments',
    created_at: '2016-12-19T01:18:45Z',
    updated_at: '2018-12-09T21:13:50Z',
    pushed_at: '2017-04-25T16:19:21Z',
    git_url: 'git://github.com/brandnpatterson/brandnpatterson.surge.sh.git',
    ssh_url: 'git@github.com:brandnpatterson/brandnpatterson.surge.sh.git',
    clone_url:
      'https://github.com/brandnpatterson/brandnpatterson.surge.sh.git',
    svn_url: 'https://github.com/brandnpatterson/brandnpatterson.surge.sh',
    homepage: '',
    size: 3504,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 94929067,
    node_id: 'MDEwOlJlcG9zaXRvcnk5NDkyOTA2Nw==',
    name: 'brandnpatterson_com',
    full_name: 'brandnpatterson/brandnpatterson_com',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/brandnpatterson_com',
    description: 'My web development portfolio',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/brandnpatterson_com',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/brandnpatterson_com/deployments',
    created_at: '2017-06-20T19:46:33Z',
    updated_at: '2018-08-20T15:38:04Z',
    pushed_at: '2018-08-11T00:05:29Z',
    git_url: 'git://github.com/brandnpatterson/brandnpatterson_com.git',
    ssh_url: 'git@github.com:brandnpatterson/brandnpatterson_com.git',
    clone_url: 'https://github.com/brandnpatterson/brandnpatterson_com.git',
    svn_url: 'https://github.com/brandnpatterson/brandnpatterson_com',
    homepage: 'http://brandnpatterson.com/',
    size: 43977,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 110291510,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTAyOTE1MTA=',
    name: 'card-game',
    full_name: 'brandnpatterson/card-game',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/card-game',
    description: 'A card game built with Vue.js',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/card-game',
    forks_url: 'https://api.github.com/repos/brandnpatterson/card-game/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/card-game/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/card-game/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/card-game/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/card-game/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/card-game/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/card-game/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/card-game/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/card-game/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/card-game/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/card-game/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/card-game/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/card-game/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/card-game/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/card-game/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/card-game/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/card-game/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/card-game/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/card-game/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/card-game/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/card-game/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/card-game/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/card-game/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/card-game/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/card-game/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/card-game/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/card-game/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/card-game/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/card-game/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/card-game/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/card-game/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/card-game/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/card-game/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/card-game/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/card-game/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/card-game/deployments',
    created_at: '2017-11-10T20:52:34Z',
    updated_at: '2017-11-10T21:22:13Z',
    pushed_at: '2017-11-13T16:43:07Z',
    git_url: 'git://github.com/brandnpatterson/card-game.git',
    ssh_url: 'git@github.com:brandnpatterson/card-game.git',
    clone_url: 'https://github.com/brandnpatterson/card-game.git',
    svn_url: 'https://github.com/brandnpatterson/card-game',
    homepage: null,
    size: 71,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 140797350,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDA3OTczNTA=',
    name: 'contact-bp',
    full_name: 'brandnpatterson/contact-bp',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/contact-bp',
    description: 'Contact Form built with PHP and Sendgrid',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/contact-bp',
    forks_url: 'https://api.github.com/repos/brandnpatterson/contact-bp/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/contact-bp/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/contact-bp/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/contact-bp/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/contact-bp/deployments',
    created_at: '2018-07-13T04:35:27Z',
    updated_at: '2019-01-24T20:16:13Z',
    pushed_at: '2019-01-24T20:16:12Z',
    git_url: 'git://github.com/brandnpatterson/contact-bp.git',
    ssh_url: 'git@github.com:brandnpatterson/contact-bp.git',
    clone_url: 'https://github.com/brandnpatterson/contact-bp.git',
    svn_url: 'https://github.com/brandnpatterson/contact-bp',
    homepage: 'https://contact-bp.herokuapp.com/',
    size: 54,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 159451879,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNTk0NTE4Nzk=',
    name: 'coriander',
    full_name: 'brandnpatterson/coriander',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/coriander',
    description: 'Form validation library built with JavaScript',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/coriander',
    forks_url: 'https://api.github.com/repos/brandnpatterson/coriander/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/coriander/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/coriander/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/coriander/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/coriander/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/coriander/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/coriander/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/coriander/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/coriander/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/coriander/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/coriander/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/coriander/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/coriander/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/coriander/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/coriander/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/coriander/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/coriander/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/coriander/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/coriander/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/coriander/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/coriander/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/coriander/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/coriander/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/coriander/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/coriander/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/coriander/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/coriander/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/coriander/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/coriander/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/coriander/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/coriander/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/coriander/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/coriander/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/coriander/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/coriander/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/coriander/deployments',
    created_at: '2018-11-28T06:03:58Z',
    updated_at: '2019-01-24T20:13:36Z',
    pushed_at: '2019-01-24T20:13:35Z',
    git_url: 'git://github.com/brandnpatterson/coriander.git',
    ssh_url: 'git@github.com:brandnpatterson/coriander.git',
    clone_url: 'https://github.com/brandnpatterson/coriander.git',
    svn_url: 'https://github.com/brandnpatterson/coriander',
    homepage: 'http://coriander.surge.sh/',
    size: 1019,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 87583825,
    node_id: 'MDEwOlJlcG9zaXRvcnk4NzU4MzgyNQ==',
    name: 'crawford-notch',
    full_name: 'brandnpatterson/crawford-notch',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/crawford-notch',
    description: 'Built with jQuery, Handlebars, & Instafeed',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/crawford-notch',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/crawford-notch/deployments',
    created_at: '2017-04-07T20:20:26Z',
    updated_at: '2017-07-21T00:44:34Z',
    pushed_at: '2017-06-25T17:03:04Z',
    git_url: 'git://github.com/brandnpatterson/crawford-notch.git',
    ssh_url: 'git@github.com:brandnpatterson/crawford-notch.git',
    clone_url: 'https://github.com/brandnpatterson/crawford-notch.git',
    svn_url: 'https://github.com/brandnpatterson/crawford-notch',
    homepage: 'http://crawford-notch.surge.sh/',
    size: 41723,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 158787841,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNTg3ODc4NDE=',
    name: 'crud',
    full_name: 'brandnpatterson/crud',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/crud',
    description: 'PHP app working with MYSQL',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/crud',
    forks_url: 'https://api.github.com/repos/brandnpatterson/crud/forks',
    keys_url: 'https://api.github.com/repos/brandnpatterson/crud/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/crud/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/crud/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/crud/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/crud/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/crud/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/crud/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/crud/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/crud/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/crud/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/crud/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/crud/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/crud/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/crud/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/crud/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/crud/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/crud/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/crud/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/crud/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/crud/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/crud/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/crud/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/crud/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/crud/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/crud/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/crud/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/crud/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/crud/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/crud/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/crud/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/crud/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/crud/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/crud/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/crud/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/crud/deployments',
    created_at: '2018-11-23T06:05:46Z',
    updated_at: '2018-11-24T03:06:44Z',
    pushed_at: '2018-11-23T10:18:16Z',
    git_url: 'git://github.com/brandnpatterson/crud.git',
    ssh_url: 'git@github.com:brandnpatterson/crud.git',
    clone_url: 'https://github.com/brandnpatterson/crud.git',
    svn_url: 'https://github.com/brandnpatterson/crud',
    homepage: '',
    size: 47,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 131470225,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzE0NzAyMjU=',
    name: 'crudlist',
    full_name: 'brandnpatterson/crudlist',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/crudlist',
    description: 'crudlist',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/crudlist',
    forks_url: 'https://api.github.com/repos/brandnpatterson/crudlist/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/crudlist/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/crudlist/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/crudlist/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/crudlist/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/crudlist/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/crudlist/deployments',
    created_at: '2018-04-29T06:03:51Z',
    updated_at: '2018-04-29T23:24:50Z',
    pushed_at: '2018-04-29T23:24:49Z',
    git_url: 'git://github.com/brandnpatterson/crudlist.git',
    ssh_url: 'git@github.com:brandnpatterson/crudlist.git',
    clone_url: 'https://github.com/brandnpatterson/crudlist.git',
    svn_url: 'https://github.com/brandnpatterson/crudlist',
    homepage: 'https://crudlist.surge.sh/',
    size: 121,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 131665266,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzE2NjUyNjY=',
    name: 'crudlist-php',
    full_name: 'brandnpatterson/crudlist-php',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/crudlist-php',
    description: 'crud todo list with php and mysql backend',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/crudlist-php',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/crudlist-php/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/crudlist-php/deployments',
    created_at: '2018-05-01T01:40:16Z',
    updated_at: '2018-05-01T13:18:09Z',
    pushed_at: '2018-05-01T02:08:40Z',
    git_url: 'git://github.com/brandnpatterson/crudlist-php.git',
    ssh_url: 'git@github.com:brandnpatterson/crudlist-php.git',
    clone_url: 'https://github.com/brandnpatterson/crudlist-php.git',
    svn_url: 'https://github.com/brandnpatterson/crudlist-php',
    homepage: '',
    size: 178,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 138944999,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzg5NDQ5OTk=',
    name: 'dev-conn-ector',
    full_name: 'brandnpatterson/dev-conn-ector',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/dev-conn-ector',
    description: 'Social network for developers',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/dev-conn-ector',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/dev-conn-ector/deployments',
    created_at: '2018-06-27T23:57:59Z',
    updated_at: '2018-07-08T04:25:37Z',
    pushed_at: '2018-07-08T04:25:36Z',
    git_url: 'git://github.com/brandnpatterson/dev-conn-ector.git',
    ssh_url: 'git@github.com:brandnpatterson/dev-conn-ector.git',
    clone_url: 'https://github.com/brandnpatterson/dev-conn-ector.git',
    svn_url: 'https://github.com/brandnpatterson/dev-conn-ector',
    homepage: 'http://dev-conn-ector.herokuapp.com',
    size: 725,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 98611457,
    node_id: 'MDEwOlJlcG9zaXRvcnk5ODYxMTQ1Nw==',
    name: 'dotfiles',
    full_name: 'brandnpatterson/dotfiles',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/dotfiles',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/dotfiles',
    forks_url: 'https://api.github.com/repos/brandnpatterson/dotfiles/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/dotfiles/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/dotfiles/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/dotfiles/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/dotfiles/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/dotfiles/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/dotfiles/deployments',
    created_at: '2017-07-28T05:24:08Z',
    updated_at: '2018-07-07T22:16:52Z',
    pushed_at: '2018-07-07T22:16:51Z',
    git_url: 'git://github.com/brandnpatterson/dotfiles.git',
    ssh_url: 'git@github.com:brandnpatterson/dotfiles.git',
    clone_url: 'https://github.com/brandnpatterson/dotfiles.git',
    svn_url: 'https://github.com/brandnpatterson/dotfiles',
    homepage: null,
    size: 7,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Shell',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 95049582,
    node_id: 'MDEwOlJlcG9zaXRvcnk5NTA0OTU4Mg==',
    name: 'emoji-tac-toe',
    full_name: 'brandnpatterson/emoji-tac-toe',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/emoji-tac-toe',
    description: 'Built with JavaScript ES6',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/emoji-tac-toe',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/emoji-tac-toe/deployments',
    created_at: '2017-06-21T21:55:52Z',
    updated_at: '2018-05-29T17:45:44Z',
    pushed_at: '2018-03-06T02:34:16Z',
    git_url: 'git://github.com/brandnpatterson/emoji-tac-toe.git',
    ssh_url: 'git@github.com:brandnpatterson/emoji-tac-toe.git',
    clone_url: 'https://github.com/brandnpatterson/emoji-tac-toe.git',
    svn_url: 'https://github.com/brandnpatterson/emoji-tac-toe',
    homepage: 'https://emoji-tac-toe.surge.sh',
    size: 360,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 105307976,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDUzMDc5NzY=',
    name: 'es6-for-everyone',
    full_name: 'brandnpatterson/es6-for-everyone',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/es6-for-everyone',
    description: 'ES6 Course by Wes Bos',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/es6-for-everyone',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/es6-for-everyone/deployments',
    created_at: '2017-09-29T19:08:24Z',
    updated_at: '2017-09-29T19:11:36Z',
    pushed_at: '2017-10-19T16:23:20Z',
    git_url: 'git://github.com/brandnpatterson/es6-for-everyone.git',
    ssh_url: 'git@github.com:brandnpatterson/es6-for-everyone.git',
    clone_url: 'https://github.com/brandnpatterson/es6-for-everyone.git',
    svn_url: 'https://github.com/brandnpatterson/es6-for-everyone',
    homepage: null,
    size: 828,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 167670655,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjc2NzA2NTU=',
    name: 'express-mysql',
    full_name: 'brandnpatterson/express-mysql',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/express-mysql',
    description: 'node, express, and mysql',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/express-mysql',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/express-mysql/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/express-mysql/deployments',
    created_at: '2019-01-26T09:16:34Z',
    updated_at: '2019-01-26T09:22:31Z',
    pushed_at: '2019-01-26T09:22:30Z',
    git_url: 'git://github.com/brandnpatterson/express-mysql.git',
    ssh_url: 'git@github.com:brandnpatterson/express-mysql.git',
    clone_url: 'https://github.com/brandnpatterson/express-mysql.git',
    svn_url: 'https://github.com/brandnpatterson/express-mysql',
    homepage: null,
    size: 25,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 146071898,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDYwNzE4OTg=',
    name: 'filter-js',
    full_name: 'brandnpatterson/filter-js',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/filter-js',
    description: 'filter with Javascript',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/filter-js',
    forks_url: 'https://api.github.com/repos/brandnpatterson/filter-js/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/filter-js/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/filter-js/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/filter-js/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/filter-js/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/filter-js/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/filter-js/deployments',
    created_at: '2018-08-25T06:35:15Z',
    updated_at: '2018-10-03T21:29:47Z',
    pushed_at: '2018-09-12T00:45:18Z',
    git_url: 'git://github.com/brandnpatterson/filter-js.git',
    ssh_url: 'git@github.com:brandnpatterson/filter-js.git',
    clone_url: 'https://github.com/brandnpatterson/filter-js.git',
    svn_url: 'https://github.com/brandnpatterson/filter-js',
    homepage: 'http://filter-js.surge.sh/',
    size: 148,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 135388266,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzUzODgyNjY=',
    name: 'first-contributions',
    full_name: 'brandnpatterson/first-contributions',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/first-contributions',
    description: '🚀✨ Help beginners contribute to open source projects',
    fork: true,
    url: 'https://api.github.com/repos/brandnpatterson/first-contributions',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/first-contributions/deployments',
    created_at: '2018-05-30T04:31:48Z',
    updated_at: '2018-09-26T15:15:15Z',
    pushed_at: '2018-05-30T04:40:29Z',
    git_url: 'git://github.com/brandnpatterson/first-contributions.git',
    ssh_url: 'git@github.com:brandnpatterson/first-contributions.git',
    clone_url: 'https://github.com/brandnpatterson/first-contributions.git',
    svn_url: 'https://github.com/brandnpatterson/first-contributions',
    homepage: 'https://roshanjossey.github.io/first-contributions/',
    size: 25394,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 140105542,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDAxMDU1NDI=',
    name: 'fiveday-weather',
    full_name: 'brandnpatterson/fiveday-weather',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/fiveday-weather',
    description:
      'Five Day Weather Average built with React, Redux, and React Sparklines',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/fiveday-weather',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/fiveday-weather/deployments',
    created_at: '2018-07-07T17:46:41Z',
    updated_at: '2018-12-13T03:48:54Z',
    pushed_at: '2018-12-11T18:39:09Z',
    git_url: 'git://github.com/brandnpatterson/fiveday-weather.git',
    ssh_url: 'git@github.com:brandnpatterson/fiveday-weather.git',
    clone_url: 'https://github.com/brandnpatterson/fiveday-weather.git',
    svn_url: 'https://github.com/brandnpatterson/fiveday-weather',
    homepage: 'http://fiveday-weather.surge.sh/',
    size: 293,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 80557808,
    node_id: 'MDEwOlJlcG9zaXRvcnk4MDU1NzgwOA==',
    name: 'flix-search',
    full_name: 'brandnpatterson/flix-search',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/flix-search',
    description: 'Built with React using Axios and JSON to create archives',
    fork: true,
    url: 'https://api.github.com/repos/brandnpatterson/flix-search',
    forks_url: 'https://api.github.com/repos/brandnpatterson/flix-search/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/flix-search/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/flix-search/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/flix-search/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/flix-search/deployments',
    created_at: '2017-01-31T20:12:49Z',
    updated_at: '2017-04-03T08:02:20Z',
    pushed_at: '2017-01-31T20:15:44Z',
    git_url: 'git://github.com/brandnpatterson/flix-search.git',
    ssh_url: 'git@github.com:brandnpatterson/flix-search.git',
    clone_url: 'https://github.com/brandnpatterson/flix-search.git',
    svn_url: 'https://github.com/brandnpatterson/flix-search',
    homepage: 'https://flix-search.surge.sh',
    size: 9144,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 91203618,
    node_id: 'MDEwOlJlcG9zaXRvcnk5MTIwMzYxOA==',
    name: 'flutter-press',
    full_name: 'brandnpatterson/flutter-press',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/flutter-press',
    description: 'Built with PHP Slim, MySQL, Illuminate, & JavaScript',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/flutter-press',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/flutter-press/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/flutter-press/deployments',
    created_at: '2017-05-13T21:24:28Z',
    updated_at: '2017-08-02T19:48:38Z',
    pushed_at: '2017-08-09T20:58:52Z',
    git_url: 'git://github.com/brandnpatterson/flutter-press.git',
    ssh_url: 'git@github.com:brandnpatterson/flutter-press.git',
    clone_url: 'https://github.com/brandnpatterson/flutter-press.git',
    svn_url: 'https://github.com/brandnpatterson/flutter-press',
    homepage: 'http://www.flutter.press/',
    size: 3650,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 100307289,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDAzMDcyODk=',
    name: 'form-component',
    full_name: 'brandnpatterson/form-component',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/form-component',
    description:
      'Form Submission to a REST API built with Ruby on Rails and PostgreSQL',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/form-component',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/form-component/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/form-component/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/form-component/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/form-component/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/form-component/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/form-component/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/form-component/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/form-component/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/form-component/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/form-component/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/form-component/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/form-component/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/form-component/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/form-component/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/form-component/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/form-component/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/form-component/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/form-component/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/form-component/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/form-component/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/form-component/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/form-component/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/form-component/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/form-component/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/form-component/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/form-component/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/form-component/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/form-component/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/form-component/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/form-component/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/form-component/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/form-component/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/form-component/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/form-component/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/form-component/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/form-component/deployments',
    created_at: '2017-08-14T20:35:19Z',
    updated_at: '2019-01-24T20:15:23Z',
    pushed_at: '2019-01-24T20:15:22Z',
    git_url: 'git://github.com/brandnpatterson/form-component.git',
    ssh_url: 'git@github.com:brandnpatterson/form-component.git',
    clone_url: 'https://github.com/brandnpatterson/form-component.git',
    svn_url: 'https://github.com/brandnpatterson/form-component',
    homepage: 'http://form-component.herokuapp.com/',
    size: 1948,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Ruby',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 99852269,
    node_id: 'MDEwOlJlcG9zaXRvcnk5OTg1MjI2OQ==',
    name: 'form-component-ui',
    full_name: 'brandnpatterson/form-component-ui',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/form-component-ui',
    description: 'Form Component',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/form-component-ui',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/form-component-ui/deployments',
    created_at: '2017-08-09T20:58:25Z',
    updated_at: '2018-12-08T01:56:12Z',
    pushed_at: '2018-12-08T00:56:32Z',
    git_url: 'git://github.com/brandnpatterson/form-component-ui.git',
    ssh_url: 'git@github.com:brandnpatterson/form-component-ui.git',
    clone_url: 'https://github.com/brandnpatterson/form-component-ui.git',
    svn_url: 'https://github.com/brandnpatterson/form-component-ui',
    homepage: 'http://form-component.surge.sh',
    size: 1085,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 83485322,
    node_id: 'MDEwOlJlcG9zaXRvcnk4MzQ4NTMyMg==',
    name: 'goldilox',
    full_name: 'brandnpatterson/goldilox',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/goldilox',
    description:
      'Single Page Application built with React, React-Router, & Webpack',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/goldilox',
    forks_url: 'https://api.github.com/repos/brandnpatterson/goldilox/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/goldilox/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/goldilox/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/goldilox/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/goldilox/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/goldilox/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/goldilox/deployments',
    created_at: '2017-02-28T22:23:35Z',
    updated_at: '2017-06-23T18:51:39Z',
    pushed_at: '2017-06-30T17:11:04Z',
    git_url: 'git://github.com/brandnpatterson/goldilox.git',
    ssh_url: 'git@github.com:brandnpatterson/goldilox.git',
    clone_url: 'https://github.com/brandnpatterson/goldilox.git',
    svn_url: 'https://github.com/brandnpatterson/goldilox',
    homepage: 'http://goldilox.surge.sh',
    size: 146557,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 97889903,
    node_id: 'MDEwOlJlcG9zaXRvcnk5Nzg4OTkwMw==',
    name: 'hairindustrysalon',
    full_name: 'brandnpatterson/hairindustrysalon',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/hairindustrysalon',
    description: 'Built with Express, Handlebars, jQuery, & Bootstrap',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/hairindustrysalon',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/hairindustrysalon/deployments',
    created_at: '2017-07-21T00:42:31Z',
    updated_at: '2017-08-03T23:25:25Z',
    pushed_at: '2017-07-26T18:26:50Z',
    git_url: 'git://github.com/brandnpatterson/hairindustrysalon.git',
    ssh_url: 'git@github.com:brandnpatterson/hairindustrysalon.git',
    clone_url: 'https://github.com/brandnpatterson/hairindustrysalon.git',
    svn_url: 'https://github.com/brandnpatterson/hairindustrysalon',
    homepage: 'https://hairindustrysalon.herokuapp.com/',
    size: 13992,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 161962526,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjE5NjI1MjY=',
    name: 'hello-csharp',
    full_name: 'brandnpatterson/hello-csharp',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/hello-csharp',
    description: 'an introduction to C#',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/hello-csharp',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/hello-csharp/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/hello-csharp/deployments',
    created_at: '2018-12-16T02:57:45Z',
    updated_at: '2018-12-29T19:35:42Z',
    pushed_at: '2018-12-16T02:58:21Z',
    git_url: 'git://github.com/brandnpatterson/hello-csharp.git',
    ssh_url: 'git@github.com:brandnpatterson/hello-csharp.git',
    clone_url: 'https://github.com/brandnpatterson/hello-csharp.git',
    svn_url: 'https://github.com/brandnpatterson/hello-csharp',
    homepage: null,
    size: 3,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'C#',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 128720554,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjg3MjA1NTQ=',
    name: 'hello-dev',
    full_name: 'brandnpatterson/hello-dev',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/hello-dev',
    description: 'dev env',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/hello-dev',
    forks_url: 'https://api.github.com/repos/brandnpatterson/hello-dev/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/hello-dev/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/hello-dev/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/hello-dev/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/hello-dev/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/hello-dev/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/hello-dev/deployments',
    created_at: '2018-04-09T05:46:20Z',
    updated_at: '2018-05-29T17:45:18Z',
    pushed_at: '2018-05-24T15:26:39Z',
    git_url: 'git://github.com/brandnpatterson/hello-dev.git',
    ssh_url: 'git@github.com:brandnpatterson/hello-dev.git',
    clone_url: 'https://github.com/brandnpatterson/hello-dev.git',
    svn_url: 'https://github.com/brandnpatterson/hello-dev',
    homepage: 'http://hello-dev.surge.sh',
    size: 472,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 160741568,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjA3NDE1Njg=',
    name: 'hello-php',
    full_name: 'brandnpatterson/hello-php',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/hello-php',
    description: 'introduction to OOP in PHP',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/hello-php',
    forks_url: 'https://api.github.com/repos/brandnpatterson/hello-php/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/hello-php/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/hello-php/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/hello-php/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/hello-php/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/hello-php/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/hello-php/deployments',
    created_at: '2018-12-06T22:41:47Z',
    updated_at: '2018-12-06T22:42:30Z',
    pushed_at: '2018-12-06T22:42:08Z',
    git_url: 'git://github.com/brandnpatterson/hello-php.git',
    ssh_url: 'git@github.com:brandnpatterson/hello-php.git',
    clone_url: 'https://github.com/brandnpatterson/hello-php.git',
    svn_url: 'https://github.com/brandnpatterson/hello-php',
    homepage: '',
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 163458348,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjM0NTgzNDg=',
    name: 'hello-python',
    full_name: 'brandnpatterson/hello-python',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/hello-python',
    description: 'hello python',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/hello-python',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/hello-python/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/hello-python/deployments',
    created_at: '2018-12-28T23:41:25Z',
    updated_at: '2018-12-28T23:41:52Z',
    pushed_at: '2018-12-28T23:41:51Z',
    git_url: 'git://github.com/brandnpatterson/hello-python.git',
    ssh_url: 'git@github.com:brandnpatterson/hello-python.git',
    clone_url: 'https://github.com/brandnpatterson/hello-python.git',
    svn_url: 'https://github.com/brandnpatterson/hello-python',
    homepage: null,
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 161961708,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjE5NjE3MDg=',
    name: 'hello-ts',
    full_name: 'brandnpatterson/hello-ts',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/hello-ts',
    description: 'an introduction to TypeScript',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/hello-ts',
    forks_url: 'https://api.github.com/repos/brandnpatterson/hello-ts/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/hello-ts/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/hello-ts/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/hello-ts/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/hello-ts/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/hello-ts/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/hello-ts/deployments',
    created_at: '2018-12-16T02:42:00Z',
    updated_at: '2018-12-29T19:35:15Z',
    pushed_at: '2018-12-16T02:42:31Z',
    git_url: 'git://github.com/brandnpatterson/hello-ts.git',
    ssh_url: 'git@github.com:brandnpatterson/hello-ts.git',
    clone_url: 'https://github.com/brandnpatterson/hello-ts.git',
    svn_url: 'https://github.com/brandnpatterson/hello-ts',
    homepage: null,
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 128719995,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjg3MTk5OTU=',
    name: 'hello-webpack',
    full_name: 'brandnpatterson/hello-webpack',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/hello-webpack',
    description: 'front end dev env using webpack',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/hello-webpack',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/hello-webpack/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/hello-webpack/deployments',
    created_at: '2018-04-09T05:40:36Z',
    updated_at: '2019-01-24T20:18:20Z',
    pushed_at: '2019-01-24T20:18:19Z',
    git_url: 'git://github.com/brandnpatterson/hello-webpack.git',
    ssh_url: 'git@github.com:brandnpatterson/hello-webpack.git',
    clone_url: 'https://github.com/brandnpatterson/hello-webpack.git',
    svn_url: 'https://github.com/brandnpatterson/hello-webpack',
    homepage: 'http://hello-webpack.surge.sh',
    size: 614,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 128665860,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjg2NjU4NjA=',
    name: 'hello-wordpress',
    full_name: 'brandnpatterson/hello-wordpress',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/hello-wordpress',
    description: 'wordpress dev env using a custom theme',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/hello-wordpress',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress/deployments',
    created_at: '2018-04-08T17:35:50Z',
    updated_at: '2018-05-01T01:24:23Z',
    pushed_at: '2018-05-01T01:24:23Z',
    git_url: 'git://github.com/brandnpatterson/hello-wordpress.git',
    ssh_url: 'git@github.com:brandnpatterson/hello-wordpress.git',
    clone_url: 'https://github.com/brandnpatterson/hello-wordpress.git',
    svn_url: 'https://github.com/brandnpatterson/hello-wordpress',
    homepage: '',
    size: 371,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 128709117,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjg3MDkxMTc=',
    name: 'hello-wordpress-theme',
    full_name: 'brandnpatterson/hello-wordpress-theme',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/hello-wordpress-theme',
    description: 'dev env using wordpress with a child theme',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/hello-wordpress-theme/deployments',
    created_at: '2018-04-09T03:25:06Z',
    updated_at: '2018-04-30T01:58:22Z',
    pushed_at: '2018-04-30T01:58:22Z',
    git_url: 'git://github.com/brandnpatterson/hello-wordpress-theme.git',
    ssh_url: 'git@github.com:brandnpatterson/hello-wordpress-theme.git',
    clone_url: 'https://github.com/brandnpatterson/hello-wordpress-theme.git',
    svn_url: 'https://github.com/brandnpatterson/hello-wordpress-theme',
    homepage: '',
    size: 1193,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 105394779,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDUzOTQ3Nzk=',
    name: 'higher-order-functions',
    full_name: 'brandnpatterson/higher-order-functions',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/higher-order-functions',
    description: 'Review of common JS Higher Order Functions',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/higher-order-functions',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/higher-order-functions/deployments',
    created_at: '2017-09-30T19:19:34Z',
    updated_at: '2017-09-30T19:20:16Z',
    pushed_at: '2017-10-12T21:33:43Z',
    git_url: 'git://github.com/brandnpatterson/higher-order-functions.git',
    ssh_url: 'git@github.com:brandnpatterson/higher-order-functions.git',
    clone_url: 'https://github.com/brandnpatterson/higher-order-functions.git',
    svn_url: 'https://github.com/brandnpatterson/higher-order-functions',
    homepage: null,
    size: 3,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 100510809,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDA1MTA4MDk=',
    name: 'idiosync-api',
    full_name: 'brandnpatterson/idiosync-api',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/idiosync-api',
    description: 'REST API for the literary journal idiosync',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/idiosync-api',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/idiosync-api/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-api/deployments',
    created_at: '2017-08-16T16:35:08Z',
    updated_at: '2017-11-13T19:58:07Z',
    pushed_at: '2017-09-30T23:14:25Z',
    git_url: 'git://github.com/brandnpatterson/idiosync-api.git',
    ssh_url: 'git@github.com:brandnpatterson/idiosync-api.git',
    clone_url: 'https://github.com/brandnpatterson/idiosync-api.git',
    svn_url: 'https://github.com/brandnpatterson/idiosync-api',
    homepage: '',
    size: 44,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Ruby',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 100511276,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDA1MTEyNzY=',
    name: 'idiosync-ui',
    full_name: 'brandnpatterson/idiosync-ui',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/idiosync-ui',
    description:
      'literary journal created with React, React Router, and Styled Components',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/idiosync-ui',
    forks_url: 'https://api.github.com/repos/brandnpatterson/idiosync-ui/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/idiosync-ui/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/idiosync-ui/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/idiosync-ui/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/idiosync-ui/deployments',
    created_at: '2017-08-16T16:40:47Z',
    updated_at: '2017-08-22T21:33:06Z',
    pushed_at: '2017-10-24T22:38:53Z',
    git_url: 'git://github.com/brandnpatterson/idiosync-ui.git',
    ssh_url: 'git@github.com:brandnpatterson/idiosync-ui.git',
    clone_url: 'https://github.com/brandnpatterson/idiosync-ui.git',
    svn_url: 'https://github.com/brandnpatterson/idiosync-ui',
    homepage: '',
    size: 19978,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 133513990,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzM1MTM5OTA=',
    name: 'intro-to-web-dev-v2',
    full_name: 'brandnpatterson/intro-to-web-dev-v2',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/intro-to-web-dev-v2',
    description: 'Intro to Web Dev, v2',
    fork: true,
    url: 'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/intro-to-web-dev-v2/deployments',
    created_at: '2018-05-15T12:37:38Z',
    updated_at: '2018-05-15T12:37:39Z',
    pushed_at: '2018-05-17T22:26:14Z',
    git_url: 'git://github.com/brandnpatterson/intro-to-web-dev-v2.git',
    ssh_url: 'git@github.com:brandnpatterson/intro-to-web-dev-v2.git',
    clone_url: 'https://github.com/brandnpatterson/intro-to-web-dev-v2.git',
    svn_url: 'https://github.com/brandnpatterson/intro-to-web-dev-v2',
    homepage: 'https://btholt.github.io/intro-to-web-dev-v2/',
    size: 3414,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA='
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 77979702,
    node_id: 'MDEwOlJlcG9zaXRvcnk3Nzk3OTcwMg==',
    name: 'jaime-quach',
    full_name: 'brandnpatterson/jaime-quach',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/jaime-quach',
    description: 'Single Page Application built with Pug, jQuery, & Instafeed',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/jaime-quach',
    forks_url: 'https://api.github.com/repos/brandnpatterson/jaime-quach/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/jaime-quach/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/jaime-quach/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/jaime-quach/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/jaime-quach/deployments',
    created_at: '2017-01-04T04:11:44Z',
    updated_at: '2017-08-02T20:19:57Z',
    pushed_at: '2017-08-02T20:26:37Z',
    git_url: 'git://github.com/brandnpatterson/jaime-quach.git',
    ssh_url: 'git@github.com:brandnpatterson/jaime-quach.git',
    clone_url: 'https://github.com/brandnpatterson/jaime-quach.git',
    svn_url: 'https://github.com/brandnpatterson/jaime-quach',
    homepage: 'http://jaime-quach.surge.sh/',
    size: 21132,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 140199586,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDAxOTk1ODY=',
    name: 'js-fundamentals',
    full_name: 'brandnpatterson/js-fundamentals',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/js-fundamentals',
    description: 'JS Fundamentals',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/js-fundamentals',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/js-fundamentals/deployments',
    created_at: '2018-07-08T20:16:24Z',
    updated_at: '2018-07-09T04:14:15Z',
    pushed_at: '2018-07-09T04:14:14Z',
    git_url: 'git://github.com/brandnpatterson/js-fundamentals.git',
    ssh_url: 'git@github.com:brandnpatterson/js-fundamentals.git',
    clone_url: 'https://github.com/brandnpatterson/js-fundamentals.git',
    svn_url: 'https://github.com/brandnpatterson/js-fundamentals',
    homepage: null,
    size: 3,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 108456827,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDg0NTY4Mjc=',
    name: 'laracasts-vue',
    full_name: 'brandnpatterson/laracasts-vue',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/laracasts-vue',
    description: 'Laracasts Tutorial on Vue 2',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/laracasts-vue',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/laracasts-vue/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/laracasts-vue/deployments',
    created_at: '2017-10-26T19:32:42Z',
    updated_at: '2017-11-14T19:26:02Z',
    pushed_at: '2017-11-21T14:58:30Z',
    git_url: 'git://github.com/brandnpatterson/laracasts-vue.git',
    ssh_url: 'git@github.com:brandnpatterson/laracasts-vue.git',
    clone_url: 'https://github.com/brandnpatterson/laracasts-vue.git',
    svn_url: 'https://github.com/brandnpatterson/laracasts-vue',
    homepage: '',
    size: 799,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 59680519,
    node_id: 'MDEwOlJlcG9zaXRvcnk1OTY4MDUxOQ==',
    name: 'laurenrosewhite',
    full_name: 'brandnpatterson/laurenrosewhite',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/laurenrosewhite',
    description: 'Single page app built with jQuery',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/laurenrosewhite',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/laurenrosewhite/deployments',
    created_at: '2016-05-25T16:42:53Z',
    updated_at: '2017-08-02T20:23:00Z',
    pushed_at: '2018-05-30T14:47:43Z',
    git_url: 'git://github.com/brandnpatterson/laurenrosewhite.git',
    ssh_url: 'git@github.com:brandnpatterson/laurenrosewhite.git',
    clone_url: 'https://github.com/brandnpatterson/laurenrosewhite.git',
    svn_url: 'https://github.com/brandnpatterson/laurenrosewhite',
    homepage: 'http://laurenrosewhite.surge.sh',
    size: 25219,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 92115986,
    node_id: 'MDEwOlJlcG9zaXRvcnk5MjExNTk4Ng==',
    name: 'lessons-receipt-form',
    full_name: 'brandnpatterson/lessons-receipt-form',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/lessons-receipt-form',
    description: 'Built with PHP',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/lessons-receipt-form',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/lessons-receipt-form/deployments',
    created_at: '2017-05-23T01:38:32Z',
    updated_at: '2017-07-21T00:44:06Z',
    pushed_at: '2017-06-07T17:03:05Z',
    git_url: 'git://github.com/brandnpatterson/lessons-receipt-form.git',
    ssh_url: 'git@github.com:brandnpatterson/lessons-receipt-form.git',
    clone_url: 'https://github.com/brandnpatterson/lessons-receipt-form.git',
    svn_url: 'https://github.com/brandnpatterson/lessons-receipt-form',
    homepage: '',
    size: 5,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 107577318,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDc1NzczMTg=',
    name: 'markdown',
    full_name: 'brandnpatterson/markdown',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/markdown',
    description: 'Markdown Fundamentals',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/markdown',
    forks_url: 'https://api.github.com/repos/brandnpatterson/markdown/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/markdown/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/markdown/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/markdown/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/markdown/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/markdown/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/markdown/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/markdown/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/markdown/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/markdown/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/markdown/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/markdown/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/markdown/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/markdown/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/markdown/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/markdown/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/markdown/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/markdown/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/markdown/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/markdown/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/markdown/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/markdown/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/markdown/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/markdown/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/markdown/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/markdown/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/markdown/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/markdown/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/markdown/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/markdown/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/markdown/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/markdown/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/markdown/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/markdown/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/markdown/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/markdown/deployments',
    created_at: '2017-10-19T17:22:43Z',
    updated_at: '2017-10-19T17:23:24Z',
    pushed_at: '2017-10-19T17:23:54Z',
    git_url: 'git://github.com/brandnpatterson/markdown.git',
    ssh_url: 'git@github.com:brandnpatterson/markdown.git',
    clone_url: 'https://github.com/brandnpatterson/markdown.git',
    svn_url: 'https://github.com/brandnpatterson/markdown',
    homepage: null,
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 106619467,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDY2MTk0Njc=',
    name: 'mixins-scss',
    full_name: 'brandnpatterson/mixins-scss',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/mixins-scss',
    description: 'mixins using scss',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/mixins-scss',
    forks_url: 'https://api.github.com/repos/brandnpatterson/mixins-scss/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/mixins-scss/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/mixins-scss/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/mixins-scss/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/mixins-scss/deployments',
    created_at: '2017-10-11T23:19:22Z',
    updated_at: '2017-10-11T23:20:46Z',
    pushed_at: '2017-10-11T23:21:05Z',
    git_url: 'git://github.com/brandnpatterson/mixins-scss.git',
    ssh_url: 'git@github.com:brandnpatterson/mixins-scss.git',
    clone_url: 'https://github.com/brandnpatterson/mixins-scss.git',
    svn_url: 'https://github.com/brandnpatterson/mixins-scss',
    homepage: '',
    size: 41,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'CSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 92353413,
    node_id: 'MDEwOlJlcG9zaXRvcnk5MjM1MzQxMw==',
    name: 'node-website',
    full_name: 'brandnpatterson/node-website',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/node-website',
    description: 'Built with Node, Express, & MongoDB',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/node-website',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/node-website/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/node-website/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/node-website/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/node-website/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/node-website/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/node-website/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/node-website/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/node-website/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/node-website/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/node-website/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/node-website/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/node-website/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/node-website/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/node-website/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/node-website/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/node-website/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/node-website/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/node-website/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/node-website/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/node-website/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/node-website/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/node-website/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/node-website/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/node-website/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/node-website/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/node-website/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/node-website/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/node-website/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/node-website/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/node-website/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/node-website/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/node-website/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/node-website/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/node-website/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/node-website/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/node-website/deployments',
    created_at: '2017-05-25T01:48:14Z',
    updated_at: '2018-03-28T17:40:42Z',
    pushed_at: '2018-03-28T17:40:40Z',
    git_url: 'git://github.com/brandnpatterson/node-website.git',
    ssh_url: 'git@github.com:brandnpatterson/node-website.git',
    clone_url: 'https://github.com/brandnpatterson/node-website.git',
    svn_url: 'https://github.com/brandnpatterson/node-website',
    homepage: '',
    size: 18044,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 107592394,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDc1OTIzOTQ=',
    name: 'php_101',
    full_name: 'brandnpatterson/php_101',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/php_101',
    description: 'CRUD App built with OOP PHP and MySQL',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/php_101',
    forks_url: 'https://api.github.com/repos/brandnpatterson/php_101/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/php_101/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/php_101/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/php_101/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/php_101/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/php_101/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/php_101/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/php_101/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/php_101/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/php_101/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/php_101/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/php_101/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/php_101/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/php_101/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/php_101/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/php_101/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/php_101/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/php_101/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/php_101/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/php_101/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/php_101/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/php_101/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/php_101/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/php_101/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/php_101/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/php_101/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/php_101/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/php_101/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/php_101/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/php_101/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/php_101/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/php_101/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/php_101/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/php_101/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/php_101/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/php_101/deployments',
    created_at: '2017-10-19T19:59:54Z',
    updated_at: '2017-10-20T15:59:39Z',
    pushed_at: '2017-11-10T15:45:16Z',
    git_url: 'git://github.com/brandnpatterson/php_101.git',
    ssh_url: 'git@github.com:brandnpatterson/php_101.git',
    clone_url: 'https://github.com/brandnpatterson/php_101.git',
    svn_url: 'https://github.com/brandnpatterson/php_101',
    homepage: '',
    size: 41,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 107456147,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDc0NTYxNDc=',
    name: 'php_class_inheritance',
    full_name: 'brandnpatterson/php_class_inheritance',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/php_class_inheritance',
    description: 'PHP Class Inheritance',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/php_class_inheritance',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/php_class_inheritance/deployments',
    created_at: '2017-10-18T19:55:20Z',
    updated_at: '2017-10-18T19:55:35Z',
    pushed_at: '2017-10-18T19:56:21Z',
    git_url: 'git://github.com/brandnpatterson/php_class_inheritance.git',
    ssh_url: 'git@github.com:brandnpatterson/php_class_inheritance.git',
    clone_url: 'https://github.com/brandnpatterson/php_class_inheritance.git',
    svn_url: 'https://github.com/brandnpatterson/php_class_inheritance',
    homepage: null,
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 161874028,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjE4NzQwMjg=',
    name: 'react-env',
    full_name: 'brandnpatterson/react-env',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/react-env',
    description: 'react dev environment',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/react-env',
    forks_url: 'https://api.github.com/repos/brandnpatterson/react-env/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/react-env/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/react-env/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/react-env/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/react-env/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/react-env/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/react-env/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/react-env/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/react-env/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/react-env/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/react-env/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/react-env/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/react-env/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/react-env/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/react-env/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/react-env/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/react-env/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/react-env/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/react-env/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/react-env/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/react-env/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/react-env/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/react-env/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/react-env/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/react-env/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/react-env/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/react-env/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/react-env/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/react-env/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/react-env/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/react-env/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/react-env/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/react-env/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/react-env/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/react-env/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/react-env/deployments',
    created_at: '2018-12-15T05:42:38Z',
    updated_at: '2018-12-17T02:48:14Z',
    pushed_at: '2018-12-17T02:48:13Z',
    git_url: 'git://github.com/brandnpatterson/react-env.git',
    ssh_url: 'git@github.com:brandnpatterson/react-env.git',
    clone_url: 'https://github.com/brandnpatterson/react-env.git',
    svn_url: 'https://github.com/brandnpatterson/react-env',
    homepage: '',
    size: 1143,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 110595913,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTA1OTU5MTM=',
    name: 'react-rails-website',
    full_name: 'brandnpatterson/react-rails-website',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/react-rails-website',
    description:
      'Built with React Rails, React Router, Styled Components, and PosgresQL',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/react-rails-website',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/react-rails-website/deployments',
    created_at: '2017-11-13T20:05:06Z',
    updated_at: '2018-03-28T13:06:25Z',
    pushed_at: '2018-03-01T03:20:36Z',
    git_url: 'git://github.com/brandnpatterson/react-rails-website.git',
    ssh_url: 'git@github.com:brandnpatterson/react-rails-website.git',
    clone_url: 'https://github.com/brandnpatterson/react-rails-website.git',
    svn_url: 'https://github.com/brandnpatterson/react-rails-website',
    homepage: '',
    size: 414,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 140345387,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDAzNDUzODc=',
    name: 'react-redux-bp',
    full_name: 'brandnpatterson/react-redux-bp',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/react-redux-bp',
    description: 'react redux boilerplate',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/react-redux-bp',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-bp/deployments',
    created_at: '2018-07-09T21:43:58Z',
    updated_at: '2018-07-09T22:04:47Z',
    pushed_at: '2018-07-09T22:04:46Z',
    git_url: 'git://github.com/brandnpatterson/react-redux-bp.git',
    ssh_url: 'git@github.com:brandnpatterson/react-redux-bp.git',
    clone_url: 'https://github.com/brandnpatterson/react-redux-bp.git',
    svn_url: 'https://github.com/brandnpatterson/react-redux-bp',
    homepage: 'http://react-redux-bp.surge.sh/',
    size: 89,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 143534386,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDM1MzQzODY=',
    name: 'react-redux-testing',
    full_name: 'brandnpatterson/react-redux-testing',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/react-redux-testing',
    description: 'React and Redux with Testing using Jest and Enzyme',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/react-redux-testing',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/react-redux-testing/deployments',
    created_at: '2018-08-04T14:11:29Z',
    updated_at: '2018-10-10T17:07:09Z',
    pushed_at: '2018-10-10T17:06:13Z',
    git_url: 'git://github.com/brandnpatterson/react-redux-testing.git',
    ssh_url: 'git@github.com:brandnpatterson/react-redux-testing.git',
    clone_url: 'https://github.com/brandnpatterson/react-redux-testing.git',
    svn_url: 'https://github.com/brandnpatterson/react-redux-testing',
    homepage: '',
    size: 246,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 161979736,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjE5Nzk3MzY=',
    name: 'react-ts-env',
    full_name: 'brandnpatterson/react-ts-env',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/react-ts-env',
    description: 'react typescript dev environment',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/react-ts-env',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/react-ts-env/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/react-ts-env/deployments',
    created_at: '2018-12-16T07:55:17Z',
    updated_at: '2019-01-29T05:15:33Z',
    pushed_at: '2018-12-17T03:08:26Z',
    git_url: 'git://github.com/brandnpatterson/react-ts-env.git',
    ssh_url: 'git@github.com:brandnpatterson/react-ts-env.git',
    clone_url: 'https://github.com/brandnpatterson/react-ts-env.git',
    svn_url: 'https://github.com/brandnpatterson/react-ts-env',
    homepage: '',
    size: 189,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 101436183,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDE0MzYxODM=',
    name: 'reddit-clone-api',
    full_name: 'brandnpatterson/reddit-clone-api',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/reddit-clone-api',
    description: 'API Built with Node, Express, & MongoDB',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/reddit-clone-api',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/reddit-clone-api/deployments',
    created_at: '2017-08-25T19:33:34Z',
    updated_at: '2017-08-25T19:34:15Z',
    pushed_at: '2017-08-29T14:49:40Z',
    git_url: 'git://github.com/brandnpatterson/reddit-clone-api.git',
    ssh_url: 'git@github.com:brandnpatterson/reddit-clone-api.git',
    clone_url: 'https://github.com/brandnpatterson/reddit-clone-api.git',
    svn_url: 'https://github.com/brandnpatterson/reddit-clone-api',
    homepage: null,
    size: 86,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 162060313,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjIwNjAzMTM=',
    name: 'redux-app',
    full_name: 'brandnpatterson/redux-app',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/redux-app',
    description: 'Built with React and Redux',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/redux-app',
    forks_url: 'https://api.github.com/repos/brandnpatterson/redux-app/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/redux-app/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/redux-app/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/redux-app/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/redux-app/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/redux-app/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/redux-app/deployments',
    created_at: '2018-12-17T01:52:47Z',
    updated_at: '2018-12-17T03:11:16Z',
    pushed_at: '2018-12-17T03:11:15Z',
    git_url: 'git://github.com/brandnpatterson/redux-app.git',
    ssh_url: 'git@github.com:brandnpatterson/redux-app.git',
    clone_url: 'https://github.com/brandnpatterson/redux-app.git',
    svn_url: 'https://github.com/brandnpatterson/redux-app',
    homepage: '',
    size: 200,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 140513820,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDA1MTM4MjA=',
    name: 'redux-thunk-blog',
    full_name: 'brandnpatterson/redux-thunk-blog',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/redux-thunk-blog',
    description: 'Redux Thunk Blog',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/redux-thunk-blog',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/redux-thunk-blog/deployments',
    created_at: '2018-07-11T02:58:42Z',
    updated_at: '2018-07-11T03:00:17Z',
    pushed_at: '2018-07-11T02:59:44Z',
    git_url: 'git://github.com/brandnpatterson/redux-thunk-blog.git',
    ssh_url: 'git@github.com:brandnpatterson/redux-thunk-blog.git',
    clone_url: 'https://github.com/brandnpatterson/redux-thunk-blog.git',
    svn_url: 'https://github.com/brandnpatterson/redux-thunk-blog',
    homepage: 'http://redux-thunk-blog.surge.sh/',
    size: 87,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 127609843,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjc2MDk4NDM=',
    name: 'runebear',
    full_name: 'brandnpatterson/runebear',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/runebear',
    description:
      'Digital literary magazine built with React, React Router, and Styled Components that uses a headless CMS with the WP REST API',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/runebear',
    forks_url: 'https://api.github.com/repos/brandnpatterson/runebear/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/runebear/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/runebear/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/runebear/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/runebear/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/runebear/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/runebear/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/runebear/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/runebear/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/runebear/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/runebear/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/runebear/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/runebear/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/runebear/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/runebear/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/runebear/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/runebear/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/runebear/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/runebear/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/runebear/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/runebear/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/runebear/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/runebear/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/runebear/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/runebear/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/runebear/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/runebear/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/runebear/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/runebear/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/runebear/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/runebear/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/runebear/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/runebear/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/runebear/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/runebear/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/runebear/deployments',
    created_at: '2018-04-01T08:06:04Z',
    updated_at: '2019-01-24T20:10:01Z',
    pushed_at: '2019-01-24T20:09:59Z',
    git_url: 'git://github.com/brandnpatterson/runebear.git',
    ssh_url: 'git@github.com:brandnpatterson/runebear.git',
    clone_url: 'https://github.com/brandnpatterson/runebear.git',
    svn_url: 'https://github.com/brandnpatterson/runebear',
    homepage: 'http://runebear.com/',
    size: 874,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 161102750,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjExMDI3NTA=',
    name: 'runebear-admin',
    full_name: 'brandnpatterson/runebear-admin',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/runebear-admin',
    description: 'Admin CMS rules for Runebear',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/runebear-admin',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/runebear-admin/deployments',
    created_at: '2018-12-10T02:04:33Z',
    updated_at: '2018-12-10T20:29:20Z',
    pushed_at: '2018-12-10T20:29:19Z',
    git_url: 'git://github.com/brandnpatterson/runebear-admin.git',
    ssh_url: 'git@github.com:brandnpatterson/runebear-admin.git',
    clone_url: 'https://github.com/brandnpatterson/runebear-admin.git',
    svn_url: 'https://github.com/brandnpatterson/runebear-admin',
    homepage: '',
    size: 4,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 127609553,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjc2MDk1NTM=',
    name: 'runebear-api',
    full_name: 'brandnpatterson/runebear-api',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/runebear-api',
    description: 'wordpress rest api',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/runebear-api',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/runebear-api/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/runebear-api/deployments',
    created_at: '2018-04-01T08:01:46Z',
    updated_at: '2018-04-23T13:08:40Z',
    pushed_at: '2018-04-12T05:21:59Z',
    git_url: 'git://github.com/brandnpatterson/runebear-api.git',
    ssh_url: 'git@github.com:brandnpatterson/runebear-api.git',
    clone_url: 'https://github.com/brandnpatterson/runebear-api.git',
    svn_url: 'https://github.com/brandnpatterson/runebear-api',
    homepage: '',
    size: 16546,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA='
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 138796306,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzg3OTYzMDY=',
    name: 'runebear-vue',
    full_name: 'brandnpatterson/runebear-vue',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/runebear-vue',
    description: 'vue-cli using the wordpress api',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/runebear-vue',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/runebear-vue/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/runebear-vue/deployments',
    created_at: '2018-06-26T21:37:43Z',
    updated_at: '2018-06-26T21:42:25Z',
    pushed_at: '2018-06-26T21:41:39Z',
    git_url: 'git://github.com/brandnpatterson/runebear-vue.git',
    ssh_url: 'git@github.com:brandnpatterson/runebear-vue.git',
    clone_url: 'https://github.com/brandnpatterson/runebear-vue.git',
    svn_url: 'https://github.com/brandnpatterson/runebear-vue',
    homepage: '',
    size: 142,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 140641870,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDA2NDE4NzA=',
    name: 'sandbox-php',
    full_name: 'brandnpatterson/sandbox-php',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/sandbox-php',
    description: 'Sandbox for comparing PHP to JS',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/sandbox-php',
    forks_url: 'https://api.github.com/repos/brandnpatterson/sandbox-php/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/sandbox-php/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/sandbox-php/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/sandbox-php/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/sandbox-php/deployments',
    created_at: '2018-07-12T00:47:26Z',
    updated_at: '2018-07-13T00:25:48Z',
    pushed_at: '2018-07-12T04:08:20Z',
    git_url: 'git://github.com/brandnpatterson/sandbox-php.git',
    ssh_url: 'git@github.com:brandnpatterson/sandbox-php.git',
    clone_url: 'https://github.com/brandnpatterson/sandbox-php.git',
    svn_url: 'https://github.com/brandnpatterson/sandbox-php',
    homepage: '',
    size: 11,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 135385697,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzUzODU2OTc=',
    name: 'Selection-js',
    full_name: 'brandnpatterson/Selection-js',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/Selection-js',
    description:
      'A lightweight javascipt library which provides users with a set of options in the form of a small popover over the selected portion of text.',
    fork: true,
    url: 'https://api.github.com/repos/brandnpatterson/Selection-js',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/Selection-js/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/Selection-js/deployments',
    created_at: '2018-05-30T03:57:07Z',
    updated_at: '2018-05-30T03:57:09Z',
    pushed_at: '2018-05-30T04:03:21Z',
    git_url: 'git://github.com/brandnpatterson/Selection-js.git',
    ssh_url: 'git@github.com:brandnpatterson/Selection-js.git',
    clone_url: 'https://github.com/brandnpatterson/Selection-js.git',
    svn_url: 'https://github.com/brandnpatterson/Selection-js',
    homepage: 'https://prateekkalra.github.io/Selection-js/',
    size: 64,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 113091634,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTMwOTE2MzQ=',
    name: 'shs-repo-updater',
    full_name: 'brandnpatterson/shs-repo-updater',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/shs-repo-updater',
    description: 'automate setting up shs localhost',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/shs-repo-updater',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/shs-repo-updater/deployments',
    created_at: '2017-12-04T20:30:23Z',
    updated_at: '2018-12-19T21:10:41Z',
    pushed_at: '2018-12-19T21:10:17Z',
    git_url: 'git://github.com/brandnpatterson/shs-repo-updater.git',
    ssh_url: 'git@github.com:brandnpatterson/shs-repo-updater.git',
    clone_url: 'https://github.com/brandnpatterson/shs-repo-updater.git',
    svn_url: 'https://github.com/brandnpatterson/shs-repo-updater',
    homepage: '',
    size: 26,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'Shell',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 81122652,
    node_id: 'MDEwOlJlcG9zaXRvcnk4MTEyMjY1Mg==',
    name: 'simple-todo-list',
    full_name: 'brandnpatterson/simple-todo-list',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/simple-todo-list',
    description: 'Simple Todo List based on PracticalJS',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/simple-todo-list',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/simple-todo-list/deployments',
    created_at: '2017-02-06T19:20:01Z',
    updated_at: '2017-06-23T18:52:34Z',
    pushed_at: '2017-02-07T20:44:30Z',
    git_url: 'git://github.com/brandnpatterson/simple-todo-list.git',
    ssh_url: 'git@github.com:brandnpatterson/simple-todo-list.git',
    clone_url: 'https://github.com/brandnpatterson/simple-todo-list.git',
    svn_url: 'https://github.com/brandnpatterson/simple-todo-list',
    homepage: 'http://simple-todo-list.surge.sh',
    size: 10,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 148859801,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDg4NTk4MDE=',
    name: 'single-file-react',
    full_name: 'brandnpatterson/single-file-react',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/single-file-react',
    description: 'React in one file',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/single-file-react',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/single-file-react/deployments',
    created_at: '2018-09-15T01:57:43Z',
    updated_at: '2018-09-15T01:58:07Z',
    pushed_at: '2018-09-15T01:58:06Z',
    git_url: 'git://github.com/brandnpatterson/single-file-react.git',
    ssh_url: 'git@github.com:brandnpatterson/single-file-react.git',
    clone_url: 'https://github.com/brandnpatterson/single-file-react.git',
    svn_url: 'https://github.com/brandnpatterson/single-file-react',
    homepage: null,
    size: 70,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 148856772,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDg4NTY3NzI=',
    name: 'single-file-redux',
    full_name: 'brandnpatterson/single-file-redux',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/single-file-redux',
    description: 'React and Redux in one file',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/single-file-redux',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/single-file-redux/deployments',
    created_at: '2018-09-15T01:07:08Z',
    updated_at: '2018-09-15T01:22:35Z',
    pushed_at: '2018-09-15T01:22:34Z',
    git_url: 'git://github.com/brandnpatterson/single-file-redux.git',
    ssh_url: 'git@github.com:brandnpatterson/single-file-redux.git',
    clone_url: 'https://github.com/brandnpatterson/single-file-redux.git',
    svn_url: 'https://github.com/brandnpatterson/single-file-redux',
    homepage: 'http://single-file-redux.surge.sh/',
    size: 162,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 134660639,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ2NjA2Mzk=',
    name: 'spinny-widget',
    full_name: 'brandnpatterson/spinny-widget',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/spinny-widget',
    description: 'Spinny Widget styled with Bulma',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/spinny-widget',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/spinny-widget/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/spinny-widget/deployments',
    created_at: '2018-05-24T04:24:05Z',
    updated_at: '2018-05-24T15:24:02Z',
    pushed_at: '2018-05-24T15:24:01Z',
    git_url: 'git://github.com/brandnpatterson/spinny-widget.git',
    ssh_url: 'git@github.com:brandnpatterson/spinny-widget.git',
    clone_url: 'https://github.com/brandnpatterson/spinny-widget.git',
    svn_url: 'https://github.com/brandnpatterson/spinny-widget',
    homepage: 'http://spinny-widget.surge.sh/',
    size: 100,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 61510073,
    node_id: 'MDEwOlJlcG9zaXRvcnk2MTUxMDA3Mw==',
    name: 'tad',
    full_name: 'brandnpatterson/tad',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/tad',
    description: 'Single Page Application built with jQuery & Bootstrap',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/tad',
    forks_url: 'https://api.github.com/repos/brandnpatterson/tad/forks',
    keys_url: 'https://api.github.com/repos/brandnpatterson/tad/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/tad/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/tad/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/tad/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/tad/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/tad/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/tad/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/tad/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/tad/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/tad/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/tad/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/tad/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/tad/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/tad/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/brandnpatterson/tad/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/tad/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/tad/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/tad/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/tad/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/tad/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/tad/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/tad/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/tad/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/tad/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/tad/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/tad/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/tad/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/brandnpatterson/tad/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/tad/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/tad/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/tad/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/tad/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/tad/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/tad/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/tad/deployments',
    created_at: '2016-06-20T02:00:00Z',
    updated_at: '2017-06-23T18:52:13Z',
    pushed_at: '2017-04-25T16:19:12Z',
    git_url: 'git://github.com/brandnpatterson/tad.git',
    ssh_url: 'git@github.com:brandnpatterson/tad.git',
    clone_url: 'https://github.com/brandnpatterson/tad.git',
    svn_url: 'https://github.com/brandnpatterson/tad',
    homepage: '',
    size: 37298,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 123980063,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjM5ODAwNjM=',
    name: 'tdd',
    full_name: 'brandnpatterson/tdd',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/tdd',
    description: 'Test Driven Development Cases',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/tdd',
    forks_url: 'https://api.github.com/repos/brandnpatterson/tdd/forks',
    keys_url: 'https://api.github.com/repos/brandnpatterson/tdd/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/tdd/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/tdd/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/tdd/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/tdd/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/tdd/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/tdd/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/tdd/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/tdd/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/tdd/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/tdd/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/tdd/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/tdd/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/tdd/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/brandnpatterson/tdd/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/tdd/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/tdd/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/tdd/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/tdd/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/tdd/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/tdd/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/tdd/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/tdd/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/tdd/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/tdd/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/tdd/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/tdd/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/brandnpatterson/tdd/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/tdd/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/tdd/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/tdd/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/tdd/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/tdd/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/tdd/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/tdd/deployments',
    created_at: '2018-03-05T21:18:19Z',
    updated_at: '2018-03-05T21:18:56Z',
    pushed_at: '2018-03-05T21:28:56Z',
    git_url: 'git://github.com/brandnpatterson/tdd.git',
    ssh_url: 'git@github.com:brandnpatterson/tdd.git',
    clone_url: 'https://github.com/brandnpatterson/tdd.git',
    svn_url: 'https://github.com/brandnpatterson/tdd',
    homepage: null,
    size: 2,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 136389149,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzYzODkxNDk=',
    name: 'team-alignment',
    full_name: 'brandnpatterson/team-alignment',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/team-alignment',
    description: null,
    fork: true,
    url: 'https://api.github.com/repos/brandnpatterson/team-alignment',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/team-alignment/deployments',
    created_at: '2018-06-06T21:41:42Z',
    updated_at: '2018-06-06T21:44:03Z',
    pushed_at: '2018-06-06T21:44:02Z',
    git_url: 'git://github.com/brandnpatterson/team-alignment.git',
    ssh_url: 'git@github.com:brandnpatterson/team-alignment.git',
    clone_url: 'https://github.com/brandnpatterson/team-alignment.git',
    svn_url: 'https://github.com/brandnpatterson/team-alignment',
    homepage: null,
    size: 19,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 102164039,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDIxNjQwMzk=',
    name: 'vue-basics',
    full_name: 'brandnpatterson/vue-basics',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/vue-basics',
    description: 'Vue basics',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/vue-basics',
    forks_url: 'https://api.github.com/repos/brandnpatterson/vue-basics/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/vue-basics/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/vue-basics/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/vue-basics/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/vue-basics/deployments',
    created_at: '2017-09-02T01:08:31Z',
    updated_at: '2017-09-02T16:31:48Z',
    pushed_at: '2017-09-02T17:15:02Z',
    git_url: 'git://github.com/brandnpatterson/vue-basics.git',
    ssh_url: 'git@github.com:brandnpatterson/vue-basics.git',
    clone_url: 'https://github.com/brandnpatterson/vue-basics.git',
    svn_url: 'https://github.com/brandnpatterson/vue-basics',
    homepage: 'http://punch.surge.sh/',
    size: 27,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 148865382,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDg4NjUzODI=',
    name: 'vue-vuex',
    full_name: 'brandnpatterson/vue-vuex',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/vue-vuex',
    description: 'Vue and Vuex',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/vue-vuex',
    forks_url: 'https://api.github.com/repos/brandnpatterson/vue-vuex/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/vue-vuex/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/vue-vuex/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/vue-vuex/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/vue-vuex/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/vue-vuex/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/vue-vuex/deployments',
    created_at: '2018-09-15T03:22:04Z',
    updated_at: '2018-09-15T03:22:29Z',
    pushed_at: '2018-09-15T03:22:27Z',
    git_url: 'git://github.com/brandnpatterson/vue-vuex.git',
    ssh_url: 'git@github.com:brandnpatterson/vue-vuex.git',
    clone_url: 'https://github.com/brandnpatterson/vue-vuex.git',
    svn_url: 'https://github.com/brandnpatterson/vue-vuex',
    homepage: null,
    size: 103,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Vue',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 128667616,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjg2Njc2MTY=',
    name: 'wp-blog',
    full_name: 'brandnpatterson/wp-blog',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/wp-blog',
    description: 'Wordpress Custom Theme Blog',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/wp-blog',
    forks_url: 'https://api.github.com/repos/brandnpatterson/wp-blog/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/wp-blog/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/wp-blog/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/wp-blog/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/wp-blog/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/wp-blog/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/wp-blog/deployments',
    created_at: '2018-04-08T17:57:57Z',
    updated_at: '2018-04-10T13:32:11Z',
    pushed_at: '2018-04-10T13:32:10Z',
    git_url: 'git://github.com/brandnpatterson/wp-blog.git',
    ssh_url: 'git@github.com:brandnpatterson/wp-blog.git',
    clone_url: 'https://github.com/brandnpatterson/wp-blog.git',
    svn_url: 'https://github.com/brandnpatterson/wp-blog',
    homepage: '',
    size: 100,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 128712171,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjg3MTIxNzE=',
    name: 'wp-theme',
    full_name: 'brandnpatterson/wp-theme',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/wp-theme',
    description: 'Wordpress Child Theme',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/wp-theme',
    forks_url: 'https://api.github.com/repos/brandnpatterson/wp-theme/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/brandnpatterson/wp-theme/teams',
    hooks_url: 'https://api.github.com/repos/brandnpatterson/wp-theme/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/issues/events{/number}',
    events_url: 'https://api.github.com/repos/brandnpatterson/wp-theme/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/wp-theme/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/brandnpatterson/wp-theme/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/wp-theme/deployments',
    created_at: '2018-04-09T03:57:24Z',
    updated_at: '2018-04-10T13:35:36Z',
    pushed_at: '2018-04-10T13:35:35Z',
    git_url: 'git://github.com/brandnpatterson/wp-theme.git',
    ssh_url: 'git@github.com:brandnpatterson/wp-theme.git',
    clone_url: 'https://github.com/brandnpatterson/wp-theme.git',
    svn_url: 'https://github.com/brandnpatterson/wp-theme',
    homepage: '',
    size: 1166,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  },
  {
    id: 62750923,
    node_id: 'MDEwOlJlcG9zaXRvcnk2Mjc1MDkyMw==',
    name: 'zinas-cattery',
    full_name: 'brandnpatterson/zinas-cattery',
    private: false,
    owner: {
      login: 'brandnpatterson',
      id: 19142698,
      node_id: 'MDQ6VXNlcjE5MTQyNjk4',
      avatar_url: 'https://avatars2.githubusercontent.com/u/19142698?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brandnpatterson',
      html_url: 'https://github.com/brandnpatterson',
      followers_url: 'https://api.github.com/users/brandnpatterson/followers',
      following_url:
        'https://api.github.com/users/brandnpatterson/following{/other_user}',
      gists_url: 'https://api.github.com/users/brandnpatterson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brandnpatterson/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brandnpatterson/subscriptions',
      organizations_url: 'https://api.github.com/users/brandnpatterson/orgs',
      repos_url: 'https://api.github.com/users/brandnpatterson/repos',
      events_url:
        'https://api.github.com/users/brandnpatterson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brandnpatterson/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/brandnpatterson/zinas-cattery',
    description: 'Web gallery built with jQuery and Bootstrap.',
    fork: false,
    url: 'https://api.github.com/repos/brandnpatterson/zinas-cattery',
    forks_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/forks',
    keys_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/teams',
    hooks_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/hooks',
    issue_events_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/events',
    assignees_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/branches{/branch}',
    tags_url: 'https://api.github.com/repos/brandnpatterson/zinas-cattery/tags',
    blobs_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/languages',
    stargazers_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/stargazers',
    contributors_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/contributors',
    subscribers_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/subscribers',
    subscription_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/subscription',
    commits_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/merges',
    archive_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/downloads',
    issues_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/labels{/name}',
    releases_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/brandnpatterson/zinas-cattery/deployments',
    created_at: '2016-07-06T20:22:46Z',
    updated_at: '2017-06-23T18:51:46Z',
    pushed_at: '2017-06-25T17:10:28Z',
    git_url: 'git://github.com/brandnpatterson/zinas-cattery.git',
    ssh_url: 'git@github.com:brandnpatterson/zinas-cattery.git',
    clone_url: 'https://github.com/brandnpatterson/zinas-cattery.git',
    svn_url: 'https://github.com/brandnpatterson/zinas-cattery',
    homepage: 'http://zinas-cattery.surge.sh/',
    size: 19246,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: {
      admin: true,
      push: true,
      pull: true
    }
  }
];
