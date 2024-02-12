import { QuartzComponentConstructor } from "./types"
 
export default (() => {
  function Contacts() {
    return (
	<div class="contacts">
		<h3>Contacts</h3>
		<ul class="overflow">
			<li>
				<a href="#" class="internal">
					Google
				</a>
			</li>
		</ul>
	</div>
    )
  }
 
  return Contacts
}) satisfies QuartzComponentConstructor
