import { QuartzComponentConstructor } from "./types"
import style from "./styles/backlinks.scss"
 
export default (() => {
  function Contacts() {
    return (
	<div class="contacts">
		<h3>Contacts</h3>
		<ul class="overflow">
			<li>
				<a href="mailto:hanee.devel@gmail.com" class="internal">
					<img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=Gmail&logoColor=white" /> 
				</a>
			</li>
			<li>
				<a href="https://open.kakao.com/o/sQMdBXCf" class="internal">
					<img src="https://img.shields.io/badge/KakaoTalk-FFCD00?style=for-the-badge&logoColor=black&logo=KakaoTalk" /> 
				</a>
			</li>
		</ul>
	</div>
    )
  }
  Contacts.css = style
  return Contacts
}) satisfies QuartzComponentConstructor
