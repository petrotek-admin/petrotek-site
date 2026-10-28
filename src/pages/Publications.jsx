// src/pages/Publications.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { 
  ArrowRight, 
  FileText, 
  Search, 
  Download, 
  User, 
  Mail,
  X
} from 'lucide-react';

const Publications = () => {
  const maroon = "#972037";
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Modals state
  const [selectedPub, setSelectedPub] = useState(null); // Abstract preview modal
  const [requestPub, setRequestPub] = useState(null);   // Microsoft Form modal

  const MS_FORM_BASE_URL = "https://forms.cloud.microsoft/r/8HC3RVypUn";

  const pubData = [
    { 
      title: "How Offset Wells and Boundaries Can Impact Injection Zone Pressures and Well Test Analysis", 
      authors: "Kerr, C., Cooper, K.J., and Wandke, L.", 
      citation: "presented at the 2026 Ground Water Protection Council Annual UIC Conference, February 12, 2026; Fort Worth, Texas.", 
      year: 2026, 
      tags: ["Engineering", "Class I"],
      abstract: (
        <>
          <p>The injection of fluids into the subsurface through a well results in an increase in downhole reservoir pressure due to the compression of resident fluids due to the fluid mass added to the injection zone pore space. The distribution, magnitude, and speed at which pressure rise propagates through the reservoir are the result of a combination of fluid and rock properties, elapsed time, well location, and boundary conditions. How pressure propagates through a reservoir is also a function of how a well of interest is operated, but can be altered by the operation of offset wells injecting into the same reservoir. Pressure interference from offset wells can influence apparent well injectivity, and with sufficient time and a close enough proximity, will alter the potentiometric surface of pressure rise in an injection reservoir. In some cases this can affect well test interpretation. In addition, boundary effects due to geologic heterogeneity in an injection reservoir can produce effects similar to an offset well. Since interference effects can vary from negligible to significant, understanding the circumstances under which they become important is critical for determining when they must be incorporated into well test analyses. In this sense, misconceptions may arise regarding the extent to which these factors influence well performance, reservoir behavior, and test results. Robust well test evaluations require that these influences are properly understood and are taken into consideration when they are important.</p> 
          <br />
          <p>There are many factors that contribute to well interference, and to address each in detail would exceed the allotted presentation time. Therefore, several of the most common and variable factors are discussed herein. This presentation provides an introduction to the fundamentals of pressure interference and more specifically, how it can influence apparent injectivity and well test results. Overviews of several common scenarios are outlined to demonstrate when offset wells might need to be considered in an analysis, and when their effects can be safely discounted without introducing significant uncertainty. Pressure distributions in reservoirs and associated controlling factors are described in terminology and with visual aids that will assist both technical and non-technical staff grasp the process of pressure interference. Examples are presented to illustrate real-world impacts on regulatory requirements and falloff test analyses. Practical observations about collecting data that characterizes these factors, and complications to be aware of, are presented based on Class I operating and falloff test analysis experience.</p>
        </>
      )
    },
    { 
      title: "Injection Well Seminar: A Primer for Injection Well Mechanical Integrity Testing", 
      authors: "Cooper, K.J. and Huffington, D.", 
      citation: "invited Short Course for regulators and operators presented at the 2026 Ground Water Protection Council Annual UIC Conference, February 10-12, 2026; Fort Worth, Texas.", 
      year: 2026, 
      tags: ["Regulatory", "Engineering", "Safety"] 
    },
    { 
      title: "Class I Injection Well Overview: Feasibility, Permitting & Installation", 
      authors: "Janes, W.", 
      citation: "presented at the 2024 ESD/MWRA 33rd Annual Solid Waste Technical Conference, March 6, 2024; East Lansing, Michigan.", 
      year: 2024, 
      tags: ["Class I", "Landfill Leachate", "Regulatory", "Engineering"], 
      abstract: (
        <>
          <p>Class I injection wells are part of the future to manage leachate for many solid waste facilities. This presentation will provide a general overview of a Class I UIC well project from feasibility through well completion and mechanical integrity testing. We will address tasks that should be considered by an initial feasibility study and resulting information typically provided. The presentation will also summarize the permit application process and potential review timeline for EPA and EGLE. Finally, we will review a typical well installation process including schedule and general costs.</p> 
        </>
      )
    },
    { 
      title: "Technical Considerations for CO2 Injection", 
      authors: "Wandke, L.", 
      citation: "presented at the 2024 Ground Water Protection Council UIC Conference, February 28, 2024; Oklahoma City, Oklahoma.", 
      year: 2024, 
      tags: ["CCUS"] 
    },
    {
      title: "Can Financial Assurance Become a Class VI Fatal Flaw?",
      authors: "Burton, T.",
      citation: "presented at the 2024 Ground Water Protection Council UIC Conference, February 28, 2024; Oklahoma City, Oklahoma.",
      year: 2024,
      tags: ["CCUS", "Regulatory", "Engineering"],
      abstract: (
        <>
          <p>
            Under CFR Title 40, Part 146, the Environmental Protection Agency’s (EPA) Underground Injection Control (UIC) Program invites owner-operators that include corporations (firms) to participate in CO<sub>2</sub> geologic sequestration (Class VI) projects. Class VI projects predictably involve deep injection that mandates significant assessment, planning, and infrastructure capital expenditures, as well as decades-spanning operational costs. Firms familiar with the technical challenges, financial dynamics, and risk characteristics of such projects include those capable of delivering profitable infrastructure projects. For corporate performance, such firms consider Class VI project participation in the context of a portfolio of competing opportunities: i.e., vs. similar capital projects. Comparing projects, firms look for reasons among their performance metrics for directing corporate resources towards Class VI participation—and potentially away from competing opportunities. For such comparisons, the commonly prioritized metric remains risk-based profit or loss.
          </p>
          <br />
          <p>
            Project assessment of the Class VI risk-set focuses on defining the knowns and eliminating the unknowns specific to geotechnical and engineering project elements. With EPA guidance, structured assessment works through Class VI Permit Application analyses that consider the technical specifics of Site Characterization, Area of Review, and Corrective Action. In each analysis, the firm looks to uncover fatal flaws that breach its risk tolerance and threaten sub-par profit—or even potential loss.
          </p>
          <br />
          <p>
            Traditionally, such risk warnings—as quantifiable estimations of geologic and engineering realities—are given special status above intangibles that include social-political-economic project considerations. However, firms now understand project risk also lies within these less-quantifiable Class VI participation elements—particularly within regulatory mandates surrounding Class VI Financial Assurance (FA). Comparatively, within a multi-projects’ portfolio, and when viewed through the metric of risk-based profit or loss, how might FA work against firm Class VI participation? Under what circumstances, or in what scale or scope can Financial Assurance become a Class VI project fatal flaw?
          </p>
        </>
      ),
    },
    { 
      title: "Injection Well Seminar: How Injection Technology Works and is the Basis for Regulation", 
      authors: "Cooper, K.J.", 
      citation: "invited Half-Day Short Course for regulators and operators presented at the 2024 Ground Water Protection Council UIC Conference, February 26, 2024; Oklahoma City, Oklahoma.", 
      year: 2024, 
      tags: ["Regulatory"] 
    },
    { 
      title: "Practical Lessons Learned About Risk and Approach for Class VI Permitting", 
      authors: "Cooper, K.J., Burton, T.", 
      citation: "invited presentation to the Alaska Statewide CCUS Workgroup, January 31, 2024; Anchorage, Alaska.", 
      year: 2024, 
      tags: ["CCUS"],
      abstract: (
        <>
          <p>
            For CCUS projects, regulation directs Permit Applicants’ focus towards Class VI risk scale, scope, diversity, and uncertainty. Typically, risk management costs rise to meet Class VI project risk perception. Within the spectrum of Class VI project risk that potentially includes cost escalation, market inflation, credit de-monetization, and regulatory variability; risk management costs can be equally diverse, uncertain, and dangerous to project success. They can include the costs of mandated insurance, bonding, escrow funding, cost and/or credits hedging, substantial due-diligence, project delay or even cancellation. For Class VI project success, Applicants and Regulators must work together to limit the burden of risk, to manage cost efficiency, and make projects possible and valuable for both Regulators and Applicants. Early technical and financial fatal-flaw analyses are important, with early and transparent information exchange critical. With interdependent and often-contingent regulatory, financial, technical, operational, legal, and economic criteria in play, Class VI permitting issues tend to overlap into complexity. To defeat the uncertainty, risk and cost that comes with such a mosaic, Permit Application check-listing cannot substitute for project-specific information exchange between Regulators and Applicants. Permitting guidance and standards should not be narrowly prescribed nor forced upon site-specific criteria. Regulators should acknowledge Class VI sequestration value and project economics; and in regulatory context, acknowledge and help to minimize Class VI geologic/technical challenges that bring risk. For project success, both Applicants and Regulators should remain mindful of the effect of project risk and risk management upon Class VI project capital efficiencies and limits.
          </p>
        </>
      ),
    },
    { 
      title: "Carbon Capture and Storage: Technology, Permitting, Opportunities and Challenges", 
      authors: "Demuth, H.", 
      citation: "presented at the Texas Aggregates and Concrete Association Meeting, October 19, 2023; Dallas, Texas.", 
      year: 2023, 
      tags: ["CCUS"] 
    },
    { 
      title: "Carbon Capture & Sequestration", 
      authors: "Burton, T, Demuth, H.", 
      citation: "invited presentation to the Alaska Statewide CCUS Workgroup, February 1, 2023; Anchorage, Alaska.", 
      year: 2023, 
      tags: ["CCUS"],
      abstract: (
        <>
          <p>
            A successful CCS project often is more about managing/reducing varied and complex project risk than targeted benefits. Project risks include potentially prolonged and costly permit application in an evolving and complex Federal and State regulatory environment. Political risk encompassing CCS project schedule, access to capital, equipment, material, labor and operations costs, necessary infrastructure, rights-of-way, and pore space figures importantly, and access to carbon oxide. Additionally, CCS projects may require substantial expenditures requiring sophisticated capital projects finance and assurance method and structure. High capital and/or operating expenses combined with ongoing mandated Financial Responsibility expectations risk both project operational flexibility and return on capital. Sequestration siting and associated subsurface geology and/or reservoir capacities may not be suitable for carbon oxide injection. Site Area of Review (AOR) extent and orientation can induce risk and potential costs associated with adjacent wells remediation or failure, natural faulting, and geologic strata weakness with possible induced fracturing and/or seismicity. Running the gauntlet of these risks, CCS benefits include tangible tax credits (e.g., 45Q crediting) and carbon-offset credits (e.g., the Western Climate Initiative and Regional Greenhouse Gas Initiative markets) monetization; material reduction in carbon oxides emissions to the atmosphere and regulated reduction in carbon intensity (CI) scores. To best achieve CCS Project benefits, the probability of success for most CCS projects is most impacted by Project Developer and Operator experience with CCS and UIC generally, by Permit Application experience specifically, by familiarity with CCS and UIC technical challenges, and by current and future access to a suitable subsurface reservoir with long-term capacity. The project should be near the carbon oxide generation site with few-to-no fatal flaws in the AOR. Capital, operating, and Financial Assurance costs must be proven feasible for the Project developer via reasonable stress-testing across the range of regulatory, political, financial, technical and market risks.
          </p>
        </>
      ),
    },
    { 
      title: "Determining the Area Of Review (AOR) for Class I Injection Wells", 
      authors: "Wandke, L.", 
      citation: "presented at the 2021 Kansas Department of Health and Environment Geology and Well Technology Fall Virtual Seminar, September 14, 2021; Wichita, Kansas.", 
      year: 2021, 
      tags: ["Class I"] 
    },
    { 
      title: "Horizontal Injection Considerations: Pressure Rise and Area of Review", 
      authors: "Wandke, L. and Cooper, K.J.", 
      citation: "presented at the 2020 Ground Water Protection Council Annual Virtual Forum, September 29, 2020.", 
      year: 2020, 
      tags: ["Engineering"] 
    },
    { 
      title: "Health and Safety Considerations for Workover Operations on Class I Wells", 
      authors: "Demuth, J.D.", 
      citation: "presented at the Kansas Department of Health and Environment Geology and Well Technology Unit Fall 2020 Virtual Seminar.", 
      year: 2020, 
      tags: ["Safety"] 
    },
    { 
      title: "Injection Well Seminar: The Basics of Reservoir Engineering as it Applies to Cone-of-Influence, Well Siting, and Injection Interval Formation Evaluation", 
      authors: "Cooper, K.J.", 
      citation: "invited Half-Day Short Course presented at the 2020 GWPC Annual UIC Conference, February 18, 2020; San Antonio, Texas.", 
      year: 2020, 
      tags: ["Regulatory"] 
    },
    { 
      title: "Injection Well Seminar: Operations and Regulation with Understanding", 
      authors: "Cooper, K.J.", 
      citation: "invited Half-Day Short Course presented at the 2019 GWPC Annual UIC Conference, February 27, 2019; Fort Worth, Texas.", 
      year: 2019, 
      tags: ["Engineering","Regulatory"],
      abstract: (
        <>
          <p>
            After an introduction to injection wells and UIC programs, the necessary reservoir and geologic features of an injector are described and then used to explain the concepts of pressure driven flow through a well and into porous media, pressure and injectate distribution, well capacity, containment, and cone-of-influence. UIC regulatory requirements, permits, and no-migration petition standards are then presented, followed by a summary of injection well mechanical components and well installation. The operation of injection wells with typical compliance and operating issues are then discussed and related back to the concepts introduced earlier in the presentation. Familiarization with mechanical integrity test methods and the physical principals associated with them is offered followed by a discussion of reservoir testing and what types of data and insight into injection wells can be derived from ambient reservoir monitoring (fall-off tests).
          </p>
        </>
      ),
    },
    { 
      title: "Technical Factors Involved with the Demonstration of No-Migration to Support Land Ban Exemption Petitions", 
      authors: "Payne, A. and Cooper, K.J.", 
      citation: "at the 2018 Ground Water Protection Council Annual Forum, September 11, 2018; New Orleans, Louisiana.", 
      year: 2018, 
      tags: ["Class I","Regulatory","Engineering"],
      abstract: (
        <>
          <p>
            The injection of hazardous waste into Class I injection wells requires unique evaluations to justify permits and requires the US EPA to issue an exemption to the ban on the land disposal of hazardous wastes. A demonstration of containment or of “no-migration” is required to show that to a reasonable degree of certainty there will be no endangerment of human health or the environment. Geologic characterization of the injection zone (comprised of the injection interval and the arrestment interval) is required in addition to evaluation of the sufficiency of a confining zone above the formations used for injection. Reservoir engineering and hydrogeology principles are used to project the movement of waste constituents in the subsurface over the operational lifetime of the wells and over a 10,000 year post-injection period. In addition to typical characterization of rock properties common to Class I non-hazardous and Class II permitting, factors such as geologic dip, vertical permeability, system heterogeneity and dispersivity, fluid density, and waste constituent diffusion coefficients must be included to project fluid movement based on small concentrations and over long time periods. Efforts are made to project a boundary defined by where the injected waste cannot migrate based on worst-case scenarios rather than to precisely calculate a single prediction of the ultimate injected fluid distribution.
          </p>
          <br />
          <p>
            Many factors influence the potential for the movement of waste in the subsurface. Several of the factors unique to evaluating 10,000 year migration are introduced and defined. This presentation provides an introduction regarding how injection zones and confining zones work to isolate waste in the subsurface and more specifically how geologic dip, vertical permeability, dispersivity, fluid density, and diffusion coefficients work, are inter-related, and how they influence a demonstration of no-migration. Overviews of these features and how they are applied to calculations and models are presented in terms and with graphics that will help both technical and non-technical staff visualize the process. Some examples are presented to illustrate generalized sensitivity to these parameters based on more than 30 years of experience preparing land-ban exemption petitions.
          </p>
        </>
      ),
    },
    { 
      title: "Injection Well Seminar: Operations and Regulation with Understanding", 
      authors: "Cooper, K.J.", 
      citation: "invited Full-Day Short Course at the 2018 GWPC Annual Forum, September 10, 2018; New Orleans, Louisiana.", 
      year: 2018, 
      tags: ["Regulatory"] 
    },
    { 
      title: "How Several Factors Influence Well Performance, Testing and Permitting: Density, Temperature and Friction", 
      authors: "Cooper, K.J., Wandke, L. and Pitts, R.", 
      citation: "at the 2018 GWPC Annual UIC Conference, February 12, 2018; Tulsa, Oklahoma.", 
      year: 2018, 
      tags: ["Class I","Regulatory","Engineering"],
      abstract: (
        <>
          <p>
            Injection of fluids into the subsurface through a well requires a pressure gradient to drive flow. In the simplest terms, fluids find the path of least resistance and move from zones of high pressure to zones of low pressure in flowlines, wells and injection formations. A variety of common factors generate pressures and influence the resistance to movement that fluids encounter within injection systems. These factors are important in tubing as well as in the porous media. Some of these factors are inter-related and have effects that are not always obvious. Factors that affect well performance are relevant to well design and feasibility, well economics, well maintenance, permitting and compliance. Understanding how factors define well performance allows insight into these issues. There can be misconceptions about how these factors contribute to defining well performance. To optimize permitting and operations these factors should be understood and appropriately considered.
          </p>
          <br />
          <p>
            Many factors influence well performance and to address each in detail would exceed the allotted presentation time. Therefore, three of the most common and variable factors are discussed. This presentation provides an introduction to how wells work and more specifically how density, temperature and friction in well systems work, are inter-related, and how they influence well performance. Overviews of well systems are presented to show how understanding the resulting well performance changes that can occur due to changes in each factor can help with interpreting test results, verifying compliance and optimizing operations. Well systems and factors are described in terms and graphics that will help both technical and non-technical staff visualize the injection process. Some examples are presented to illustrate real-world impacts on regulatory requirements, permitting, petition compliance, and maintenance decisions. Practical observations about obtaining data that characterizes these factors and complications to look for are presented based on Class I operating experience.
          </p>
        </>
      ),
    },
    { 
      title: "The Calculation of Injection Effects to Establish the Area of Review (AOR) for Class I Injection Wells", 
      authors: "Payne, A. and Cooper, K.J.", 
      citation: "at the 2018 GWPC Annual UIC Conference, February 12, 2018; Tulsa, Oklahoma.", 
      year: 2018, 
      tags: ["Class I","Regulatory","Engineering"],
      abstract: (
        <>
          <p>
            The calculation of injection effects to justify an Area of Review (AOR) for many types of injectors including Class I disposal wells is typically conducted to evaluate the impact of long-term injection on an injection interval, to ensure protection of any Underground Sources of Drinking Water (USDW), and to satisfy regulatory requirements. The AOR defines the lands surrounding a well where artificial penetrations must be identified and evaluated to assess the potential for vertical migration of fluid out of an injection zone and assess the need for potential corrective action. Specific properties of an injection interval and USDW, as well as operational timelines and injection rates are required as inputs.
          </p>
          <br />
          <p>
            This paper presents an introduction to the concept of AOR and a review of calculations and methods used to evaluate the reservoir pressure rise from injection that defines the zone of endangering influence (ZOEI), or cone of influence (COI) as defined in some state programs, as well as the evaluation of the area of the waste emplacement that is projected to be caused by the displacement of injection fluid into a permitted interval over the duration of well operation. An evaluation of critical pressure rise is also discussed that defines the allowable reservoir pressure rise from injection that is acceptable to ensure protection of overlying USDWs. An overview of these calculations is provided with simplified graphics to allow the visualization of these concepts. Regulatory requirements applicable to the determination of AOR according to the federal statutes and several state programs are also summarized. Examples illustrating the impacts of a range of reservoir parameters on AOR are also presented. In addition, a discussion regarding the evaluation of plugged artificial penetrations and a summary of how mud weight and plugs present in abandoned wells can impact the calculation of critical pressure is also provided.
          </p>
        </>
      ),
    },
    { 
      title: "An Introduction to Mechanical Integrity Testing with a Focus on Class I Injection Wells in Kansas", 
      authors: "Cooper, K.J., Wandke, L. and Janes, W.", 
      citation: "invited presentation at the 2017 KDHE Seminar, August 30, 2017; Wichita, Kansas.", 
      year: 2017, 
      tags: ["Engineering"] 
    },
    { 
      title: "Deep Disposal Well Applications for Uranium Operations", 
      authors: "Demuth, H.P. and Janes, W.", 
      citation: "at the U2017 Global Uranium Symposium, August 23, 2017; Casper, Wyoming.", 
      year: 2017, 
      tags: ["Uranium"] 
    },
    { 
      title: "Review of the Aquifer Exemption Process, History and Implementation Related to Groundwater Protection and Use", 
      authors: "Demuth, H.P. and Van Voorhees, R.", 
      citation: "at the National Ground Water Association Deep Groundwater Conference, March 2017; Denver, Colorado.", 
      year: 2017, 
      tags: ["Regulatory","Oil & Gas","Mining","Uranium"],
      abstract: (
        <>
          <p>
            This paper presents a review of the aquifer exemption process, criteria for granting exemptions, and the history of exemptions in the United States.
          </p>
          <br />
          <p>
            The primary focus of Safe Drinking Water Act (1974) is protection of Underground Sources of Drinking Water (USDWs) through implementation of the Underground Injection Control regulations. To summarize 40 CFR 146.3 (June 1980), USDWs are defined as an aquifer or its portion (1) Which supplies or contains a sufficient quantity of ground water to supply a public water system; and (A) currently supplies drinking water for human consumption; or (B) contains fewer than 10,000 mg/l total dissolved solids; and (2) is not an exempted aquifer.
          </p>
          <br />
          <p>
            EPA (2014) realized that aquifer protection and underground injection were both necessary. Aquifer Exemptions (AEs) (40 CFR 146.4) allow use of water bearing formations that are not USDWs, and “have no real potential to be used as drinking water sources” for industrial/commercial purposes. Those uses include, underground injection related to oil and gas operations, refineries, chemical plants and municipal water treatment (wastewater disposal), in-situ mining operations (e.g., uranium, salt, bicarbonate, etc.).
          </p>
          <br />
          <p>
            Requirements for aquifer exemption applications were provided in Guidance #34 (July 1984) and the EPA Memo to States (July 2014). In combination, these guidance documents require data/analysis in over 100 specific areas to justify an AE.
          </p>
          <br />
          <p>
            Historically, specific data on the number and type of exemptions were difficult to find. Due to a FOIA request in January 2015, those data are now available. Analysis of the EPA records indicate a total of 4,938 AE requests with 4,682 approvals and 38 denials. Of the total, 3,187 were related to program development for aquifers exempted in 1982–1983, and 96% are related to Oil and Gas production operations. Only 32% of the AEs have been issued in the subsequent 30 years.
          </p>
        </>
      ),
    },
    { 
      title: "Review of the Aquifer Exemption Process, History and Implementation Related to Groundwater Protection and Use", 
      authors: "Demuth, H.P., Cooper, K.J.", 
      citation: "at the GWPC Annual UIC Conference, February 25, 2017; Austin, Texas.", 
      year: 2017, 
      tags: ["Uranium"] 
    },
    { 
      title: "An Update on Risk-Informed, Performance Based Licensing of Source Materials: How Are We doing?", 
      authors: "Viellenave, J.H.", 
      citation: "National Mining Association Uranium Recovery Workshop, June 7, 2016; Denver, Colorado.", 
      year: 2016, 
      tags: ["Uranium"] 
    },
    { 
      title: "Is There Really A Problem? A Review of Historical Aquifer Exemptions", 
      authors: "Demuth, H.P.", 
      citation: "at the National Mining Association Uranium Recovery Workshop, June 7, 2016, Denver, Colorado.", 
      year: 2016, 
      tags: ["Uranium"] 
    },
    { 
      title: "An Introduction to Pressure Transient Testing of Injection Wells and Use for UIC Permit and Landban Petition Compliance", 
      authors: "Cooper, K.J., Wandke, L. and Payne, A.", 
      citation: "presented at the 2017 GWPC Annual UIC Conference, February 25, 2016; Austin, Texas.", 
      year: 2016, 
      tags: ["Class I","Regulatory","Engineering"],
      abstract: (
        <>
          <p>
            Reservoir testing of wells permitted as Class I and Class II injectors is common practice to evaluate reservoir conditions upon completion and to satisfy regulatory requirements. Insight into a wide variety of issues can be gained through the selection and design of proper data acquisition and analysis methods. Annual ambient monitoring of Class I injection wells is required by 40 CFR 146.13 and typically takes the form of reservoir fall-off testing. However, a variety of pressure transient testing techniques can be valuable to characterize Class I well and injection reservoir conditions. Such data can sometimes be used to investigate operational issues, not just comply with regulatory requirements. Although well test data can always provide insight into a well system, there can be misconceptions about what analysis can really tell us and the uncertainty that can be introduced into results by testing complications. For the pressure transient testing of injectors to be a useful component of well monitoring strategies, objectives should be considered to ensure that the appropriate test types, data collection, and analysis methodologies are selected.
          </p>
          <br />
          <p>
            This paper presents an introduction to the basic types of pressure transient well tests available for use to evaluate injection wells with a focus on how the most common form of testing, the pressure fall-off test works. An overview is presented regarding what can actually be derived from analysis that is described in terms and graphics that will help both technical and non-technical staff visualize the process. Some regulatory requirements applicable to well testing (states, federal regions, permit compliance, and petition support) is summarized. Observations about what matters most for obtaining data that satisfies regulatory requirements is presented based on Class I testing experience. An opinion, from a technical perspective, is provided regarding how site specific details might dictate well testing frequency and requirements.
          </p>
        </>
      ),
    },
    { 
      title: "The Relative Importance of Critical Technical and Regulatory Factors that Define Injection Well Feasibility: Pressure Matters", 
      authors: "Cooper, K.J., Payne, A. and Janes, W.", 
      citation: "presented at the 2016 GWPC Annual UIC Conference, February 25, 2016; Denver, Colorado.", 
      year: 2016, 
      tags: ["Engineering","Regulatory","Oil & Gas","Uranium","Mining"],
      abstract: (
        <>
          <p>
            The deepwell injection of waste water is often a critical part of waste management strategies for hydrocarbon production developments, the operation and restoration of ISR uranium facilities, and various types of industrial operations where brines are generated. Given suitable geology and waste characteristics, deepwell injection has often proven to be one of the safest and most cost-effective methods of liquid waste management available. Although injection technology alone can sometimes be the most logical choice for fluid management it can also complement and make waste minimization and surface treatment more practical and economical. For injection to be a useful component of fluid management strategies in different situations, a number of feasibility criteria must first be satisfied.
          </p>
          <br />
          <p>
            This paper presents general background regarding how disposal wells function from the perspective of siting criteria and reservoir engineering to identify the technical basis of some of the more critical factors necessary to evaluate technical and regulatory feasibility. Given the geologic challenges and dynamic regulatory environment that can be present, especially in parts of the western United States, a comparison/contrast of some of the specific issues that should be considered when evaluating the feasibility and permitting of UIC wells is presented. Primary regulatory concerns for prospective operators are identified and the focus is concentrated on how pressure is integral to the evaluation of many technical feasibility concerns. The reasons that pressure is integral to many feasibility concerns is described in terms and graphics that will help both technical and non-technical staff visualize the process. Comparisons are drawn to illustrate the relative impact and importance of the different factors involved, including items such as reservoir and hydrogeological characteristics and boundaries, wellbore conditions, and injectate characteristics that can each impact area of review concerns, well maintenance programs, injectate pretreatment requirements and well capacity limitations.
          </p>
        </>
      ),
    },
    { 
      title: "Application and Analysis of Step-Rate Testing to Determine Fracture Pressure in Injection Wells", 
      authors: "Wandke, L. and Cooper, K.J.", 
      citation: "presented at the 2016 GWPC Annual UIC Meeting, February 25, 2016; Denver, Colorado.", 
      year: 2016, 
      tags: ["Class I","Regulatory","Engineering"],
      abstract: (
        <>
          <p>
            A reliable estimation of fracture pressure has a multitude of valuable uses. For instance, this information can be vital during drilling operations to dictate drilling fluid density and casing design such that formations are not broken down. It can be used to optimize fracture stimulation treatments and can provide data useful for estimating the minimum horizontal stresses which can prove useful for geo-mechanical modeling. Most importantly for many injection well operators and regulators, the measurement and evaluation of fracture pressure data also has a significant regulatory impact since maximum allowable injection pressures are typically authorized as a function of fracture pressure. Injection pressure limits for Class I disposal wells are imposed according to 40CFR146.13(a)(1) to “ensure that the pressure in the injection zone during injection does not initiate new fractures or propagate existing fractures in the injection zone.”.
          </p>
          <br />
          <p>
            Because this information can have a direct impact on many technical and regulatory aspects of an injection project, it is important that accurate methods are utilized to collect and analyze relevant data. This presentation provides an overview of several tests that can provide insight into site specific pressures and stresses. We focus on a more in depth presentation of step-rate testing which is a useful method to evaluate stresses and formation pressure thresholds. It begins by describing in-situ stresses and forces that are present in a reservoir, and defines the criteria that must be met for a formation to be fractured. The step-rate testing process is then introduced, with basic methodology and plots to illustrate the testing process. Analysis methods are summarized along with common errors that can occur with data collection and analysis. Precautions and recommendations are introduced to help ensure that meaningful results are obtained from step rate tests.
          </p>
        </>
      ),
    },
    { 
      title: "Aquifer Exemptions: A Beneficial Process for Industrial Development and Source Water Protection", 
      authors: "Demuth, H.P.", 
      citation: "at the National Mining Association Uranium Recovery Workshop, June 2015; Denver, Colorado.", 
      year: 2015, 
      tags: ["Uranium"] 
    },
    { 
      title: "Groundwater Characterization Lodge Rare Earth Element Project Wyoming", 
      authors: "Lawrence, E.P. and Payne, A.", 
      citation: "presentation at the Western South Dakota Hydrology Conference, April 2014; Rapid City, South Dakota.", 
      year: 2014, 
      tags: ["Mining"] 
    },
    { 
      title: "Wastewater Management at a Proposed Uranium In-situ Recovery Project", 
      authors: "Fritz, J., Mays, J., and Demuth, H.P.", 
      citation: "at the Western South Dakota Hydrology Conference, April 2014; Rapid City, South Dakota.", 
      year: 2014, 
      tags: ["Uranium","Mining","Engineering","Regulatory"],
      abstract: (
        <>
          <p>
            Uranium in-situ recovery (ISR) projects require wastewater management systems to dispose of the excess water that results from uranium recovery and groundwater restoration. During uranium recovery, groundwater fortified with oxygen and carbon dioxide is recirculated through well fields to dissolve and recover uranium. Following uranium recovery, treated water or water from an aquifer outside of the production zone is circulated through each well field to restore groundwater quality. Slightly more water is withdrawn than injected (about 1 percent) during uranium recovery and groundwater restoration in order to maintain an inward hydraulic gradient into each well field. The excess water, known as bleed, requires disposal in an appropriately permitted wastewater management system.
          </p>
          <br />
          <p>
            Two wastewater management systems are being permitted at the Dewey-Burdock Project in Custer and Fall River counties. The preferred method is treatment to remove uranium and radionuclides followed by injection in disposal wells completed in the Minnelusa or Deadwood formations. The alternate method is land application, which will be used only in the event that insufficient capacity is available in disposal wells.
          </p>
          <br />
          <p>
            The land application system designed for the Dewey-Burdock Project is the primary focus of this oral presentation. It would consist of center pivots to dispose treated wastewater during the irrigation season and lined ponds to provide storage during the rest of the year. The land application system is designed to protect surface water and groundwater and includes provisions for operational adjustments based on extensive monitoring.
          </p>
          <br />
          <p>
            Having adequate wastewater management capacity is critical for timely groundwater restoration and maintenance of sufficient bleed for hydraulic well field control. Permitting two wastewater management systems, as opposed to a single option employed at most ISR facilities, helps ensure that adequate capacity will be available for these purposes.
          </p>
        </>
      ),
    },
    { 
      title: "Groundwater Modeling of the Hydraulic Effects of the Proposed Dewey Burdock Uranium In-situ Recovery Project", 
      authors: "Lawrence, E.P., Demuth, H.P., and Mays, J.", 
      citation: "presentation at the Western South Dakota Hydrology Conference, April 2014; Rapid City, South Dakota.", 
      year: 2014, 
      tags: ["Uranium","Mining","Engineering","Regulatory"],
      abstract: (
        <>
          <p>
            A numerical groundwater flow model was developed to support Powertech USA in permitting, planning and operation of the Dewey-Burdock Uranium Insitu Recovery (ISR) project in Fall River and Custer Counties, South Dakota. The target ore zones are within the Inyan Kara Group along the southwest flank of the Black Hills. The model was developed and calibrated using site-specific geologic and hydrologic data. Development of the numerical model improved understanding of the regional and local flow patterns, recharge and discharge boundaries, and overall water budget (available and sustainable resources) of the Fall River and Chilson aquifers (sub-systems of the Inyan Kara). Model simulations were used to evaluate potential hydraulic impacts (e.g. drawdown and changes to artesian conditions) from ISR production and restoration operations on both the local and regional scale.
          </p>
          <br />
          <p>
            Fourteen wellfields were simulated for a period of 8.5 years through production and aquifer restoration operations. Model simulations were run using anticipated production rates with variable bleed rates (net extraction) of 0.5 to 1.0 percent. Multiple aquifer restoration methods were also simulated. Maximum net extraction was simulated during periods with concurrent production and aquifer restoration with rates up to 147 gpm.
          </p>
        </>
      ),
    },
    { 
      title: "Innovations in In Situ (ISR) Uranium Development", 
      authors: "Viellenave, J.H. and L. Huffman", 
      citation: "Annual Meeting of the Society of Mining Engineers, February 26, 2014; Salt Lake City, Utah.", 
      year: 2014, 
      tags: ["Uranium"] 
    },
    { 
      title: "Critical Issues for the Deep Well Injection of ISR Uranium Waste Water", 
      authors: "Cooper, K.J., Demuth, H.P. and Payne, A.", 
      citation: "presented at the U2011 Global Uranium Symposium, September 21, 2011; Casper, Wyoming.", 
      year: 2011, 
      tags: ["Uranium","Mining","Engineering","Regulatory"],
      abstract: (
        <>
          <p>
            This paper presents an overview of deep disposal wells and their current application to the management of waste water from ISR operations. Given the geologic challenges and dynamic regulatory environment that can be present in the western United States, specific issues that should be considered when evaluating the feasibility and permitting of UIC wells are presented. A specific focus related to disposal wells in the Powder River Basin of Wyoming is discussed.
          </p>
          <br />
          <p>
            The deepwell injection of waste water is typically a critical element of the design for operation and restoration of ISR uranium facilities, especially in the central to northern climates where surface waste management alternatives are limited. Given suitable geology and waste characteristics, deepwell injection has proven to be one of the safest and most cost‐effective methods of liquid waste management available. For ISR facilities, the long term cost of deepwell injection is currently estimated as approximately 0.15 to 2.5 cents per gallon, including power, amortization of capital (based on a 9,000’ well installation and basic surface facilities), a 20‐year operational life, surface injection pressures of less than 1,000 psi, and injection rates of 25 to 200 gpm. Nationwide across a spectrum of industries, site geology and waste types, costs for long term operation of deepwell injection have ranged from less than 0.05 cents per gallon to as much as 10 cents per gallon. Low cost wells are often run without injection pumps (on gravity feed), accept very large rates over many decades and require little pre‐treatment due to optimum waste type and highly favorable geologic conditions. Typically, higher cost wells have been associated with more challenging geologic conditions, waste characteristics and system designs that are less ideal for liquid management via disposal wells. For ISR facilities in the western US, conditions are typically somewhere between these extremes.
          </p>
        </>
      ),
    },
    { 
      title: "A Method for Calculating An Aquifer Exemption Boundary for Uranium Insitu Recovery Projects", 
      authors: "Lawrence, E.P., Cooper, K.J., and Demuth, H.P.", 
      citation: "presented at the U2011 Global Uranium Symposium, September 21, 2011; Casper, Wyoming.", 
      year: 2011, 
      tags: ["Uranium","Mining","Engineering","Regulatory"],
      abstract: (
        <>
          <p>
            A science-based calculation is presented to establish the distance beyond a monitor ring that a production zone aquifer should be exempted for purposes of insitu (ISR) mining of uranium. The additional distance outside of the monitor well ring is necessary for the operator to conduct uranium recovery using accepted ISR mining methods while remaining protective of underground sources of drinking water (USDWs).
          </p>
          <br />
          <p>
            The calculation of that distance includes three components. The first component is a simple trigonometric calculation of the distance that a potential excursion could extend beyond a monitor ring outline before being detected at a monitor ring well (∆T). The second component involves the distance that the excursion could travel from the time of initial detection to the time that recovery operations are implemented (∆d). Analytical or numerical modeling methods can be used to estimate the distance traveled under hypothetical scenarios for the occurrence of an excursion (such as an out of balance wellfield).
          </p>
          <br />
          <p>
            The final component is a dispersivity factor (DF) that is applied to account for heterogeneity in the subsurface that can result in movement of an excursion beyond the distances calculated using assumptions of a homogenous isotropic aquifer system. The sum of these components represents the distance beyond the monitor well ring boundary (AEb) that should be included in the exempted aquifer, as indicated by:
          </p>
          <br />
          <p>
            AEb = ∆T + ∆d + DF.
          </p>
          <br />
          <p>
            This calculation may not be applicable for all ISR projects and other methods may provide acceptable alternatives for determination of the aquifer exemption boundary.
          </p>
        </>
      ),
    },
    { 
      title: "Application of Numerical Groundwater Flow Models to Uranium ISR Projects", 
      authors: "Lawrence, E.P., Demuth, H.P, and Cooper, K.J.", 
      citation: "at the 2011 NRC/NMA Uranium Recovery Workshop, May 25, 2011; Denver, Colorado.", 
      year: 2011, 
      tags: ["Uranium"] 
    },
    { 
      title: "Use of Hydrologic Tests and Numerical Models to Predict Hydraulic Behavior of an Unconfined Aquifer During Insitu Recovery of Uranium", 
      authors: "Lawrence, E. P, Demuth, H.P, Cooper, K.J., and Wichers, D.", 
      citation: "at the 2010 NGWA Summit, April 14, 2010; Denver, Colorado.", 
      year: 2010, 
      tags: ["Uranium","Mining","Engineering","Regulatory"],
      abstract: (
        <>
          <p>
            Uranium One plans to conduct in-situ recovery (ISR) of uranium at the Moore Ranch Project in the Powder River Basin of Wyoming. Aquifer conditions within the target ore zone are unconfined across portions of the site. A hydrologic test was conducted to evaluate hydraulics associated with unconfined flow during projected ISR operations and to characterize aquifer properties within the production zone aquifer. The hydrologic test was performed on a five-spot well pattern installed in an area of a proposed mine unit where unconfined aquifer conditions are prevalent. The five-spot well pattern test included a centrally located recovery well, four injection wells and several monitor wells.
          </p>
          <br />
          <p>
            The test was conducted in two phases. The initial phase included only extraction from the recovery well. Data from the extraction test allowed detailed characterization of production zone aquifer properties. Results of the extraction test indicate that, within the five-spot area, the production zone aquifer is relatively homogeneous and isotropic.
          </p>
          <br />
          <p>
            The second phase of the test included injection of water extracted from the recovery well. Results of the extraction/injection test indicate that the production zone aquifer can sustain recovery and injection rates that are anticipated during ISR mining.
          </p>
          <br />
          <p>
            Data derived from the five-spot hydrologic test were used to develop a numerical model that is representative of site-specific conditions (including the unconfined nature of the production zone aquifer) on a well-pattern scale. The numerical model was calibrated to measured field data from the test. The calibrated model was used to demonstrate impacts of an unconfined system on wellfield design. The results of the initial well-pattern scale model were extrapolated to a wellfield and permit area scale model to evaluate wellfield bleed, operational flare, excursion control, water disposal requirements and restoration operations.
          </p>
        </>
      ),
    },
    { 
      title: "Geologic Considerations for a Class I Disposal Well", 
      authors: "Cooper, K.J. and Hansen, T.", 
      citation: "presentation at the KDHE Geology Section 2009 Fall Seminar, September 2, 2009; Wichita, Kansas.", 
      year: 2009, 
      tags: ["Class I"] 
    },
    { 
      title: "Class I Injection Well Use at ISR Facilities", 
      authors: "Cooper, K.J. and Demuth, H.P.", 
      citation: "at the 2009 NRC/NMA Uranium Recovery Workshop, July 2, 2009; Denver, Colorado.", 
      year: 2009, 
      tags: ["Uranium"] 
    },
    { 
      title: "Groundwater Modeling Applications to Uranium ISR Projects: The Relationship of Sweep Efficiency to Pore Volume Removal", 
      authors: "Lawrence, E.P., Cooper, K.J., and Demuth, H.P.", 
      citation: "at the U2009 Global Uranium Symposium, May 13, 2009; Keystone, Colorado.", 
      year: 2009, 
      tags: ["Uranium","Mining","Engineering","Regulatory"],
      abstract: (
        <>
          <p>
            Groundwater modeling can be a valuable tool when correctly applied to Uranium Insitu Recovery (ISR) Projects. Beneficial applications of groundwater modeling cover the full scope of ISR, from permitting and initial design, through production and restoration phases. Groundwater models can range from simple analytical solutions used to determine maximum anticipated drawdown at a well, to complex multi-layer numerical models that simulate concurrent production and restoration within stacked sand sequences of several mine units.
          </p>
          <br />
          <p>
            For production phases of ISR, groundwater models can be used to assist with the design and optimization of hydrologic testing programs and mine unit wellfields, monitor well spacing and layout, optimization of sweep efficiency, and horizontal and vertical flare determinations. Additionally, water balance calculations for contemporaneous production and restoration operations to determine well interference between adjacent mine units can be effectively simulated with groundwater models.
          </p>
          <br />
          <p>
            With respect to restoration of ISR projects, modeling can be used to estimate maximum rates that can be sustained to reach PV goals, the number of pore volumes (PVs) of treatment that will be required to attain targets, identify potential migration pathways, optimize groundwater sweep, and design groundwater treatment/reinjection operations. Groundwater modeling can also be used to support post restoration-monitoring and natural attenuation or alternate concentration limit strategies for aquifer restoration.
          </p>
          <br />
          <p>
            A simple modeling application is presented that demonstrates one of many ways that simulation can be used as a tool to evaluate operational issues. This example illustrates the relationship between sweep efficiency and pore volumes removed in a typical ISR well pattern. A general rule of thumb in the uranium ISR industry is that economically successful leaching of uranium within a well pattern can take between 30 and 40 pore volumes (PVs) of groundwater extraction. A pore volume in this context is defined as the fluid-filled volume within a well pattern. The model presented was used to simulate a generic five-spot pattern in an ideal isotropic homogenous system with a single extraction well surrounded by four injection wells. In a homogeneous system, initial breakthrough (arrival of lixiviant) from the injection well to the extraction well occurs along the shortest flowpath between the wells. The longer pathways may take up to three times as long to initially reach the extraction well. This means that the removal of 40 PVs from a well pattern actually results in the equivalent displacement of over 50 PVs along the shorter flowpaths and less than 20 PVs along the outermost, longer flowpaths. Simulation can also be used to visualize how changing the sequence of injection/extraction wells without increasing the total volume of fluid pumped through the wellfield can result in more uniform and homogenous contact with the ore body. While the rate of recovery is obviously determined by injection rate, the sweep efficiency is not strongly impacted by rate of injection/extraction.
          </p>
        </>
      ),
    },
    { 
      title: "Geochemistry of Uranium in In-situ Recovery Aquifers after Restoration", 
      authors: "Schramke, J.A, Demuth, H.P. and Pelizza, M.S", 
      citation: "Presented at the Global Uranium Symposium 2009, May 13, 2009; Keystone, Colorado.", 
      year: 2009, 
      tags: ["Uranium","Mining","Engineering","Regulatory"],
      abstract: (
        <>
          <p>
            In situ leach (ISL) methods are an important means of uranium production in the U.S. Oxidants and complexing agents such as carbonate are used to mobilize and recover uranium; the ISL methods have significant effects on groundwater quality in the ore zone aquifer due to alteration of the original reducing conditions. In addition to uranium, other constituents present in ore zone minerals may also be mobilized, including radium, selenium, arsenic, molybdenum, iron, manganese, and sulfate. Chloride concentrations are also typically increased during ISL operations because ion-exchange systems are used to remove uranium from the production fluid, which is subsequently reinjected into the production zone. Consequently, groundwater restoration is required to protect water quality in adjacent aquifers after ISL operations have ended. Restoration methods typically include groundwater sweep followed by recirculation of treated groundwater through the production zone. At some sites, restoration is then completed by injection of reductants into the production zone. After restoration, a number of factors can influence constituent migration away from the restored ISL production zone, including the redox conditions, water chemistry and mineralogy in remnant ore zones and host rock; changes in geochemical conditions in ore zones, host rock, and groundwater caused by ISL operations; the processes used and duration of aquifer restoration; and natural attenuation of groundwater constituents.
          </p>
          <br />
          <p>
            Evidence that restoration of acceptable water quality can be achieved is available from laboratory data as well as groundwater monitoring data at a number of restored ISL sites in the U.S. The key parameter for achieving successful restoration is re-establishment of chemically reducing conditions in the ore zones, which limits uranium mobility as well as the mobility of most constituents mobilized by ISL operations. The site monitoring data also indicate that reducing conditions can be maintained over the long term following restoration, which is necessary for demonstrating long-term protection of groundwater resources adjacent to the mined aquifer zone.
          </p>
        </>
      ),
    },
    { 
      title: "Wastewater Management via Deepwell Injection at ISR/ISL Facilities", 
      authors: "Cooper, K.J., and Demuth, H.P.", 
      citation: "at the 2009 SME Annual Meeting, February 25, 2009; Denver, Colorado.", 
      year: 2009, 
      tags: ["Uranium"] 
    },
    { 
      title: "Groundwater Restoration Results and Long Term Protection of USDW’s: A Case Study of the Irigaray Uranium Project", 
      authors: "Heili, W. and Lawrence E.P.", 
      citation: "at the CSU Health Physics Uranium Symposium, February 2, 2008; Ft. Collins, Colorado.", 
      year: 2008, 
      tags: ["Uranium"] 
    },
    { 
      title: "Overview of Operational Issues Associated with Groundwater, Restoration, and Wastewater Management at ISR/ISL Facilities", 
      authors: "Cooper, K.J., Demuth, H.P., and Lawrence, E.P.", 
      citation: "at the 2008 GWPC Winter UIC Meeting, January 15, 2008; New Orleans, Louisiana.", 
      year: 2008, 
      tags: ["Uranium","Mining","Engineering","Regulatory"],
      abstract: (
        <>
          <p>
            Mining uranium utilizing in-situ leach (ISL)/in-situ recovery (ISR) techniques involves the management of significant volumes of fluid in the subsurface. Mine unit characterization and development, production activities, and groundwater restoration efforts each involve unique permitting and operational issues. A critical concern common to all stages of ISR mining is the need to control the movement and distribution of fluids in the subsurface.
          </p>
          <br />
          <p>
            The most basic aspect of Mine Unit control is bleed system operation. Bleed is referred to as the amount of over production (e.g., the amount of fluid produced versus the amount of fluid injected). Fluid over-production is designed to result in a net inflow of groundwater into a mine pattern area to reduce the possibility of an excursion (e.g., movement of lixiviant out of a wellfield pattern and outside the exterior monitor wells). The characteristics of the formation being mined are critical to proper design of mine operations and to the spacing of monitoring wells. Success of the bleed system operation during both the mining and restoration phase is necessary to achieve the limited environmental footprint that is widely considered to be an advantage of mining with ISR technology.
          </p>
          <br />
          <p>
            This paper presents general background regarding how groundwater hydraulics work during the mining and restoration phases of ISR operations with details regarding how optimized mining methods and plans may impact permitting and operating requirements. It also provides an explanation of common restoration practices involving groundwater sweep and subsequent displacement from the perspective of identifying the possible ramifications of accelerated project schedules on consumptive use and water management requirements. General wastewater management needs and options are also discussed for the operational and restoration phases of a typical ISR project and a brief checklist of UIC technical issues pertinent to many projects are identified for further discussion.
          </p>
        </>
      ),
    },
    { 
      title: "Groundwater Modeling Supporting Aquifer Restoration at a Uranium ISR Facility, Wyoming", 
      authors: "Lawrence, E. P., Wichers, D.", 
      citation: "In Proceedings of the Global Uranium Symposium 2007, May 2007; Corpus Christi, Texas.", 
      year: 2007, 
      tags: ["Uranium"] 
    },
    { 
      title: "Equipment and Strategies for Deep Well Monitoring", 
      authors: "Cooper, K.J. and Davis, G.", 
      citation: "at the 2001 GWPC Winter UIC Meeting, January 24, 2001; Houston, Texas.", 
      year: 2001, 
      tags: ["Engineering"] 
    },
    { 
      title: "Identifying Compartmentalization in Gas Reservoirs", 
      authors: "Junkin, J.E., Cooper, K.J., and Sippel, M.A.", 
      citation: "World Oil, Gulf Publishing Company, January 1997, v. 218, Number 1, p. 37-44.", 
      year: 1997, 
      tags: ["Oil & Gas"] 
    },
    { 
      title: "Pressure Transient Analysis Techniques Aid Secondary Recovery Method Choices", 
      authors: "Junkin, J.E., Cooper, K.J. and Sippel, M.A.", 
      citation: "Petroleum Engineer International, March 1996, v. 69, Number 2, p. 63-68.", 
      year: 1996, 
      tags: ["Oil & Gas"] 
    },
    { 
      title: "Tools for Identification of Compartmentalization in Moderate-Permeability Gas Reservoirs", 
      authors: "Junkin, J.E. and Cooper, K.J.", 
      citation: "Technical Summary for GRI/DOE/BEG Report no. GRI-95/0104, 11 p., 1995.", 
      year: 1995, 
      tags: ["Oil & Gas"] 
    },
    { 
      title: "Identification of Linear Flow Geometries and Implications for Natural Gas Reservoir Development", 
      authors: "Junkin, J.E., Cooper, K.J. and Sippel, M.A.", 
      citation: "Technical Summary for GRI/DOE/BEG Report no. GRI-95/0162, 11 p., 1995.", 
      year: 1995, 
      tags: ["Oil & Gas"] 
    },
    { 
      title: "In-Situ Stress Measurement at Hazardous Disposal Well Sites: Field Application", 
      authors: "Cooper, K.J. and Lyle, R.R.", 
      citation: "published in the proceedings of the International Symposium at Lawrence Berkeley Laboratory, May 10 – 13, 1994.", 
      year: 1994, 
      tags: ["Class I","Regulatory","Engineering","Safety"],
      abstract: (
        <>
          <p>
            A variety of techniques are available to acquire in-situ stress and rock mechanics data relevant to the design and operation of disposal wells. Such data can be critical for several important reasons -- which include the development of a more complete understanding of the geologic setting of a well, calculation of safe injection pressures, and the planning of construction and stimulation activities. In addition, in-situ stress data is often an important factor in the demonstration of fluid containment required for Class I hazardous disposal wells in the United States.
          </p>
          <br />
          <p>
            Methods used to obtain these rock mechanics data include geophysical logging, coring and associated analysis, hydraulic impedance testing and pressure-transient well testing, which typically entails controlled hydraulic fracturing of a formation by pressurizing the wellbore. This last method, called in-situ stress testing, involves the collection of pressure data measured during fracture initiation, propagation and closure in an isolated section of a formation. Interpretation of this pressure data is then used to determine in-situ stresses.
          </p>
          <br />
          <p>
            This paper presents methods and techniques available for in-situ stress testing formations of interest in deep disposal wells. Wireline conveyed and conventional workstring straddle packer assemblies are discussed. Gauges, pumps and general cost data are also covered. A number of observations are presented regarding the comparison of available techniques, common problems that can be encountered during field operations, test design considerations, and ideas for the improvement of equipment and measurement techniques.
          </p>
          <br />
          <p>
            Information presented in the discussion is based, in part, on experience gained during the recent drilling and completion of a Class I hazardous waste well in the Midwest. In preparation for the submittal of operating permits and a no-migration petition demonstration, confinement and containment-interval rock layers were subjected to in-situ stress testing and drill-stem testing using both wireline and workstring tubing conveyed down-hole straddle packers. Some of the results obtained from the tests and situations encountered during the process are compared with previous stress testing conducted in other Class I hazardous waste disposal wells.
          </p>
          <br />
          <p>
            In-situ stress testing is an important tool for the collection of information relevant to the containment of wastes injected into the subsurface. As application of the technology to disposal wells increases and additional data is collected, experiences should continue to be reviewed to promote the improvement of stress test design, data measurement and analysis. Advances in these areas will serve to improve the confidence in the safety of Class I deep disposal wells as a responsible liquid waste management option.
          </p>
        </>
      ),
    },
    { 
      title: "The Fate of Underground Injection", 
      authors: "Cooper, K.J. and Lyle, R.R.", 
      citation: "SPE 26385, presented at the 68th Annual Technical Conference of the SPE, October 3 – 6, 1993; Houston, Texas.", 
      year: 1993, 
      tags: ["Engineering"] 
    },
    { 
      title: "Uniqueness of Reservoir Parameter Assignments Based on Interference Test Analysis", 
      authors: "Cooper, K.J. and Collins, R.E.", 
      citation: "presented at the AGU Spring Meeting, May 28 – 31, 1991; Baltimore, Maryland.", 
      year: 1991, 
      tags: ["Engineering"] 
    },
    { 
      title: "Geohydrologic, Geochemical and Geologic Controls on the Occurrence of Radon in Ground Water near Conifer, Colorado", 
      authors: "Lawrence, E. P., Poeter, E., and Wanty, R. B.", 
      citation: "Journal of Hydrology, Vol. 127, 1991, pp. 367-386.", 
      year: 1991, 
      tags: ["Mining"] 
    },
    { 
      title: "Applications of Transient Pressure Interference Tests to Fractured and Unfractured Injection Wells", 
      authors: "Cooper, K.J. and Collins, R.E.", 
      citation: "SPE 19785, presented at the 64th Annual Technical Conference of the SPE, October 8 – 11, 1989; San Antonio, Texas.", 
      year: 1989, 
      tags: ["Engineering"] 
    }
  ];

  const categories = ["All", "Landfill Leachate", "Class I", "Uranium", "CCUS", "Mining", "Engineering", "Oil & Gas", "Regulatory", "Safety"];

  const filteredPubs = pubData.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || pub.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <Seo title="Technical Library & Publications - Petrotek" description="Conference papers and presentations on injection wells, UIC regulation, well testing, ISR uranium, and Class VI carbon storage." path="/publications" />
      <div className="container mx-auto max-w-8xl">
        <Link to="/" className="flex items-center text-[#972037] font-bold mb-8 hover:underline group w-fit">
          <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="mb-12">
          <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
            <FileText className="w-10 h-10" style={{ color: maroon }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Technical Library</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
            Over three decades of knowledge discussed in field-validated, published papers, and conference presentations regarding subsurface fluid flow and injection technology.
          </p>
          <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 w-full sm:w-fit">
            <Mail className="w-5 h-5 mr-3" style={{ color: maroon }} />
            <span className="text-sm font-medium text-gray-700">
              Select any publication to view its abstract and submit a verified access request.
            </span>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white sticky top-[72px] z-30 py-6 border-b border-gray-100 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="relative w-full lg:max-w-[300px] shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search by title or author..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#972037] outline-none text-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide w-full lg:justify-end pb-2 lg:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap border transition-all ${
                    activeFilter === cat 
                      ? 'bg-[#972037] text-white border-[#972037]' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-[#972037] hover:text-[#972037]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Showing {filteredPubs.length} Publications
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPubs.map((pub, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedPub(pub)}
              className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 cursor-pointer"
            >
              <div className="hidden md:flex flex-col items-center pt-1 w-16">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#972037] mb-2 group-hover:bg-[#972037] group-hover:text-white transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black text-gray-300 tracking-widest">{pub.year}</span>
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {pub.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-[#972037]/5 text-[#972037] text-[10px] font-black uppercase rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#972037]">
                  {pub.title}
                </h3>
                <div className="flex items-center text-sm font-bold text-gray-700 mb-4 italic">
                  <User className="w-4 h-4 mr-2 text-gray-400" /> {pub.authors}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed border-l-2 pl-4 border-gray-100">
                  {pub.citation}
                </p>
              </div>
              <div className="md:self-center">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setRequestPub(pub);
                  }}
                  className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 hover:text-[#972037] whitespace-nowrap px-4 py-2 rounded-lg border border-transparent hover:border-[#972037]/20 hover:bg-[#972037]/5 transition-all"
                >
                  Request <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Abstract Modal Overlay */}
        {selectedPub && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedPub(null)}
          >
            <div 
              className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in slide-in-from-bottom-4 duration-300" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-20 flex justify-end p-4 pointer-events-none bg-gradient-to-b from-white via-white/80 to-transparent">
                <button 
                  onClick={() => setSelectedPub(null)}
                  aria-label="Close modal"
                  className="pointer-events-auto p-2 bg-white/90 hover:bg-gray-100 rounded-full transition-all shadow-sm border border-gray-100/80 hover:text-gray-700"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="px-8 pb-8 md:px-12 md:pb-12 -mt-12">
                <div className="mb-8 border-b border-gray-100 pb-6 pr-10">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {selectedPub.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-[#972037]/5 text-[#972037] text-[10px] font-black uppercase rounded">
                        {tag}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-black tracking-widest rounded ml-auto">
                      {selectedPub.year}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedPub.title}</h2>
                  <div className="flex items-center text-gray-700 font-bold mb-2">
                    <User className="w-5 h-5 mr-3 text-[#972037]" />
                    {selectedPub.authors}
                  </div>
                  <p className="text-sm text-gray-500 italic border-l-2 border-gray-200 pl-3 ml-1 mt-3">
                    {selectedPub.citation}
                  </p>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-[#972037]" /> Abstract
                  </h4>
                  <div className="text-lg">
                    {selectedPub.abstract || "The abstract for this publication is currently unavailable. Please contact us for more details or submit a request for the full document."}
                  </div>

                  <div className="pt-8 mt-8 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        const targetPub = selectedPub;
                        setSelectedPub(null);
                        setRequestPub(targetPub);
                      }}
                      className="inline-flex items-center px-6 py-3 bg-[#972037] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-md"
                    >
                      Request Full Publication <Download className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Microsoft Form Request Modal */}
        {requestPub && (
          <div 
            className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-gray-900/70 backdrop-blur-sm transition-opacity"
            onClick={() => setRequestPub(null)}
          >
            <div 
              className="relative bg-white w-full max-w-4xl h-[92vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
                <div className="pr-4 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#972037] block">
                    Publication Access Request
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                    {requestPub.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setRequestPub(null)}
                  className="p-2 hover:bg-gray-200/80 rounded-full transition-colors text-gray-500 shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Embedded Microsoft Form */}
              <div className="flex-1 w-full bg-white relative">
                <iframe 
                  src={MS_FORM_BASE_URL}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  title="Publication Request Form"
                  allowFullScreen
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;