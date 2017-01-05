# CloudReplica
Live at https://aalluri7.github.io/CloudReplica/

Screenshot of actual Cloud Platform page
![Actual](Cloud Actual.PNG?raw=true "Optional Title")

Screensot of replica
![Replica](Cloud mine.PNG?raw=true "Optional Title")


# Building process / thoughts
Completed:

- General layout of outer app ui and `Dashboard` section
- Toggle-able app drawer
- navigable subpages between &#39;Dashboard&#39; and &#39;Activity&#39;

Would improve with more time:

- App drawer navigation with a library like ReactRouter (updates urls / handles routing etc)
- Better structured state management (each subpage as split out component that can be loaded / unloaded)
- Normalize CSS to avoid repeating border box and flex shrink everywhere
- Use something like react-columns to layout the array of cards evenly across an appropriate number of columns based on viewport

I&#39;ve approached the building of the replica of the Google Cloud Platform dashboard as follows:

I&#39;ve chosen to start with a react-redux-materialui boilerplate since I have worked with react/redux before and the cloud platform page appeared to be built with material ui.

I began by building the layout from the outside in starting with
&lt;AppBar /&gt;
&lt;AppBody /&gt; &lt;- flex grow vertically

where app body grows to fill up the available viewport. There&#39;s also an app drawer that sits position fixed / hidden. The app body is split vertically between
&lt;SubNavigation /&gt;
&lt;SubPage /&gt; &lt;- flex grow horizontally
each of which are then split into a fixed sized header and a growing menu in the case of navigation and a growing body in the case of subpage.

The layout makes heavy use of flex box to achieve the scrollable subpage body while keeping the rest of the ui fixed.

Currently only the &#39;Dashboard&#39; page is laid out but can toggle between dashboard and an empty activity page.

The menu item component from material react does not allow customization of &#39;active&#39; style such to indicate the current navigated page so had to use a `box-shadow` trick with rgba to create a second layer of background color.

Each of the individual pieces are split out into components which allowed for easier layout (a common header component so that the menu header and the subpage header align naturally)

State management was done with redux (although the only active parts of the page are toggling the app drawer and switching between dashboard and activity
