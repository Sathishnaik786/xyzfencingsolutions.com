# Netlify Deployment Checklist

Follow these steps to deploy your XYZ Fencing Solutions website to Netlify:

## Prerequisites
- [ ] Git repository with your project code
- [ ] Netlify account (free tier available)
- [ ] Latest version of Node.js installed locally

## Pre-deployment Checks
- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run dev` to test the site locally
- [ ] Run `npm run build` to verify the build process works correctly
- [ ] Commit all changes to your Git repository

## Netlify Deployment Options

### Option 1: Continuous Deployment (Recommended)
1. [ ] Push your code to GitHub, GitLab, or Bitbucket
2. [ ] Log in to your Netlify account
3. [ ] Click "Add new site" > "Import an existing project"
4. [ ] Connect to your Git provider and select your repository
5. [ ] Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. [ ] Click "Deploy site"

### Option 2: Manual Deployment via Netlify CLI
1. [ ] Install Netlify CLI: `npm install -g netlify-cli`
2. [ ] Log in to Netlify: `netlify login`
3. [ ] Build your project: `npm run build`
4. [ ] Deploy: `netlify deploy`
5. [ ] For production: `netlify deploy --prod`

## Post-deployment Verification
- [ ] Check that all pages load correctly
- [ ] Verify navigation between pages works
- [ ] Test contact form functionality
- [ ] Confirm all images load properly
- [ ] Check mobile responsiveness
- [ ] Validate all links work correctly

## Troubleshooting Common Issues
- If pages return 404 errors, check that the `netlify.toml` redirect rules are configured correctly
- If styles appear broken, verify the `base` path in `vite.config.ts` is set to `'./'`
- If the build fails, ensure all dependencies are in `package.json`

## Custom Domain (Optional)
1. [ ] In Netlify dashboard, go to Site settings > Domain management
2. [ ] Add your custom domain
3. [ ] Configure DNS records as instructed by Netlify
4. [ ] Enable HTTPS with Let's Encrypt (automatic)

Need help? Check the full documentation in README.md or visit [Netlify Docs](https://docs.netlify.com/).