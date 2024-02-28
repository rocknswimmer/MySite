import React from 'react';
import Accordion from "./accordian.js"

function ExperienceCard({}) {


  return (
    <div className="project">
      <h3>Stock Lead</h3>
      {/* company name or title first? */}
      <h4>American Eagle</h4>

      <p>Time: </p>
      <p>Skills:</p>


      <Accordion title={"More Details"} content={<p className="newlines" >Lorem ipsum dolor sit amet, his id error consul. Qui an nonumy laudem dissentiunt, in exerci adversarium pro. Vocibus incorrupte est te. Inani recteque conceptam ne vel, ne accusata argumentum elaboraret mea.

Per id dicat novum facilisis. Dicta fuisset blandit eam in, ex vis alia laoreet contentiones. Eum ex esse erant dicit, wisi fierent nominavi et nec, at quidam legimus intellegebat nec. Utroque meliore repudiare eu ius, sed et ipsum aliquip interpretaris, mei possim meliore an.

Per ut luptatum maiestatis posidonium, in primis timeam denique mel. Enim vidisse intellegat ad usu. Qui et tibique luptatum. Reque commune sit at. Has eu affert lobortis, te eum alii ceteros, scripta conceptam pro ex.

Ut pri saepe quidam alterum. Malorum consetetur qui at. Ut sonet copiosae invenire usu, ut eam graece praesent. Denique molestiae ei mea, patrioque gloriatur mea ad. Quod incorrupte omittantur mei ad, nusquam suscipiantur ei has. Sumo altera phaedrum no duo, ne duo veri iudico convenire, inimicus interesset philosophia eum id. Eum et sensibus reprimique reformidans.

Mel at tota nullam invenire, has et porro liber evertitur, quod erroribus persequeris te ius. Stet deserunt at ius, has et habemus delicatissimi. Ut vim democritum abhorreant, mea ex perpetua interpretaris. Pro omnium ancillae cu, vidit honestatis necessitatibus ea est. Mucius oblique in ius.</p>} />


    </div>
  )
}

export default ExperienceCard;