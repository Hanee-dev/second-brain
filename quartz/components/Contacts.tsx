import { QuartzComponentConstructor } from "./types"
import style from "./styles/contacts.scss"
 
export default (() => {
  function Contacts() {
    return (
	<div class="contacts">
		<h3>Contacts</h3>
		<ul class="overflow">
			<li>
				<a href="mailto:hanee.devel@gmail.com" class="internal">
					👉 Gmail
				</a>
			</li>
			<li>
				<a href="https://open.kakao.com/o/smowK04h" class="internal">
					👉 KaKao
				</a>
			</li>
		</ul>
	</div>
    )
  }
  Contacts.css = style
  return Contacts
}) satisfies QuartzComponentConstructor
