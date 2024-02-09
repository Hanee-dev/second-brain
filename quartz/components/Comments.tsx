import { QuartzComponentConstructor } from "./types"
 
export default (() => {
  function Comments() {
    return (
	<script src="https://giscus.app/client.js"
        	data-repo="Hanee-dev/second-brain"
        	data-repo-id="R_kgDOLQCP5g"
        	data-category="Q&A"
        	data-category-id="DIC_kwDOLQCP5s4CdFen"
        	data-mapping="pathname"
        	data-strict="0"
        	data-reactions-enabled="1"
       		data-emit-metadata="0"
       		data-input-position="bottom"
        	data-theme="preferred_color_scheme"
        	data-lang="ko"
        	data-loading="lazy"
        	crossorigin="anonymous"
        	async>
	</script>
    )
  }
 
  return Comments
}) satisfies QuartzComponentConstructor
