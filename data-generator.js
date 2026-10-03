const DataGenerator = {
    categories: {
        'gene-disease': {
            headers: [
                'Select',
                'Gene Symbol',
                'Ensembl ID',
                'Disease Name',
                'Inheritance Pattern',
                'Phenotype',
                'Chromosome Location',
                'Clinical Significance',
                'Variant Count',
                'Last Updated',
                'Pathway'
            ],
            records: [
                {
                    gene: 'BRCA1',
                    ensembl: 'ENSG00000012048',
                    disease: 'Hereditary Breast and Ovarian Cancer Syndrome',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'High lifetime penetrance of early-onset breast and epithelial ovarian carcinomas',
                    chr: '17q21.31',
                    severity: 'High',
                    variantCount: 4210,
                    date: '2025-08-14',
                    pathway: 'Homologous Recombination Repair (HRR)'
                },
                {
                    gene: 'TP53',
                    ensembl: 'ENSG00000141510',
                    disease: 'Li-Fraumeni Syndrome',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Predisposition to soft tissue sarcomas, osteosarcomas, premenopausal breast cancer, brain tumors',
                    chr: '17p13.1',
                    severity: 'High',
                    variantCount: 3950,
                    date: '2025-09-02',
                    pathway: 'p53-Mediated G1/S Cell Cycle Arrest and Apoptosis'
                },
                {
                    gene: 'CFTR',
                    ensembl: 'ENSG00000001626',
                    disease: 'Cystic Fibrosis',
                    inheritance: 'Autosomal Recessive',
                    phenotype: 'Viscous pulmonary mucus, chronic Pseudomonas infections, bronchiectasis, pancreatic insufficiency',
                    chr: '7q31.2',
                    severity: 'High',
                    variantCount: 2180,
                    date: '2025-06-18',
                    pathway: 'ABC Transporter-Class Chloride & Bicarbonate Conductance'
                },
                {
                    gene: 'HBB',
                    ensembl: 'ENSG00000244734',
                    disease: 'Beta-Thalassemia & Sickle Cell Disease',
                    inheritance: 'Autosomal Recessive',
                    phenotype: 'Severe microcytic hemolytic anemia, recurrent vaso-occlusive crises, functional asplenia',
                    chr: '11p15.4',
                    severity: 'High',
                    variantCount: 1520,
                    date: '2025-07-22',
                    pathway: 'Hemoglobin Subunit Beta Synthesis & Erythrocyte Homeostasis'
                },
                {
                    gene: 'APOE',
                    ensembl: 'ENSG00000130203',
                    disease: 'Late-Onset Alzheimer Disease Susceptibility',
                    inheritance: 'Multifactorial',
                    phenotype: 'Progressive hippocampal atrophy, cognitive decline, neurofibrillary tangles, amyloid plaques',
                    chr: '19q13.32',
                    severity: 'Medium',
                    variantCount: 740,
                    date: '2025-10-05',
                    pathway: 'Lipid Homeostasis and Amyloid-Beta Clearance'
                },
                {
                    gene: 'HTT',
                    ensembl: 'ENSG00000197386',
                    disease: 'Huntington Disease',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'CAG trinucleotide repeat expansion (>36 repeats), progressive choreiform movements, dementia',
                    chr: '4p16.3',
                    severity: 'High',
                    variantCount: 590,
                    date: '2025-05-11',
                    pathway: 'Striatal Neuronal Vesicular Trafficking'
                },
                {
                    gene: 'PTEN',
                    ensembl: 'ENSG00000171862',
                    disease: 'Cowden Syndrome / PHTS',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Multiple mucocutaneous hamartomas, macrocephaly, elevated risk of breast, thyroid, and renal cancer',
                    chr: '10q23.31',
                    severity: 'High',
                    variantCount: 2450,
                    date: '2025-08-29',
                    pathway: 'PI3K / AKT / mTOR Signaling Downregulation'
                },
                {
                    gene: 'APC',
                    ensembl: 'ENSG00000134982',
                    disease: 'Familial Adenomatous Polyposis',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Pan-colonic development of hundreds to thousands of adenomatous polyps in adolescence',
                    chr: '5q22.2',
                    severity: 'High',
                    variantCount: 3150,
                    date: '2025-07-15',
                    pathway: 'Wnt / Beta-Catenin Destruction Complex Signaling'
                },
                {
                    gene: 'LDLR',
                    ensembl: 'ENSG00000130164',
                    disease: 'Familial Hypercholesterolemia',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Severely elevated plasma LDL cholesterol, tendon xanthomas, corneal arcus, premature CAD',
                    chr: '19p13.2',
                    severity: 'High',
                    variantCount: 2710,
                    date: '2025-09-12',
                    pathway: 'Receptor-Mediated Endocytosis of LDL Particles'
                },
                {
                    gene: 'DMD',
                    ensembl: 'ENSG00000198947',
                    disease: 'Duchenne Muscular Dystrophy',
                    inheritance: 'X-Linked Recessive',
                    phenotype: 'Progressive proximal muscle weakness, Gowers sign, pseudohypertrophy of calves, cardiomyopathy',
                    chr: 'Xp21.2-p21.1',
                    severity: 'High',
                    variantCount: 3410,
                    date: '2025-04-30',
                    pathway: 'Sarcolemmal Dystrophin-Glycoprotein Complex Maintenance'
                },
                {
                    gene: 'FBN1',
                    ensembl: 'ENSG00000166147',
                    disease: 'Marfan Syndrome',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Progressive aortic root dilation/dissection, ectopia lentis, disproportionate tall stature, scoliosis',
                    chr: '15q21.1',
                    severity: 'High',
                    variantCount: 3080,
                    date: '2025-08-01',
                    pathway: 'Extracellular Matrix Fibrillin Microfibril Assembly'
                },
                {
                    gene: 'G6PD',
                    ensembl: 'ENSG00000160211',
                    disease: 'Glucose-6-Phosphate Dehydrogenase Deficiency',
                    inheritance: 'X-Linked Incomplete Dominant',
                    phenotype: 'Episodic acute intravascular hemolytic anemia precipitated by oxidative stressors or fava beans',
                    chr: 'Xq28',
                    severity: 'Medium',
                    variantCount: 860,
                    date: '2025-06-25',
                    pathway: 'Pentose Phosphate Pathway & Erythrocyte NADPH Production'
                },
                {
                    gene: 'MLH1',
                    ensembl: 'ENSG00000076242',
                    disease: 'Lynch Syndrome (HNPCC)',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Early-onset colorectal carcinoma with microsatellite instability (MSI-H), endometrial adenocarcinoma',
                    chr: '3p22.2',
                    severity: 'High',
                    variantCount: 2280,
                    date: '2025-09-19',
                    pathway: 'DNA Mismatch Repair (MMR) Machinery'
                },
                {
                    gene: 'PAH',
                    ensembl: 'ENSG00000171759',
                    disease: 'Phenylketonuria (PKU)',
                    inheritance: 'Autosomal Recessive',
                    phenotype: 'Hyperphenylalaninemia causing profound neurocognitive impairment, microcephaly, hypopigmentation',
                    chr: '12q23.2',
                    severity: 'High',
                    variantCount: 1250,
                    date: '2025-03-14',
                    pathway: 'Phenylalanine 4-Monooxygenase Catabolic Pathway'
                },
                {
                    gene: 'VHL',
                    ensembl: 'ENSG00000134086',
                    disease: 'Von Hippel-Lindau Syndrome',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Retinal and CNS hemangioblastomas, clear cell renal carcinoma, pheochromocytomas, pancreatic cysts',
                    chr: '3p25.3',
                    severity: 'High',
                    variantCount: 1670,
                    date: '2025-07-08',
                    pathway: 'HIF-1alpha Proteasomal Degradation & Oxygen Sensing'
                },
                {
                    gene: 'BRCA2',
                    ensembl: 'ENSG00000139618',
                    disease: 'Hereditary Breast and Ovarian Cancer 2',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'High lifetime risk of female and male breast cancer, high-grade serous ovarian cancer, pancreatic cancer',
                    chr: '13q13.1',
                    severity: 'High',
                    variantCount: 4720,
                    date: '2025-08-16',
                    pathway: 'RAD51-Mediated Homologous Recombination Repair'
                },
                {
                    gene: 'RET',
                    ensembl: 'ENSG00000165731',
                    disease: 'Multiple Endocrine Neoplasia Type 2 (MEN2)',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Nearly 100% penetrance of medullary thyroid carcinoma, bilateral pheochromocytoma, parathyroid hyperplasia',
                    chr: '10q11.21',
                    severity: 'High',
                    variantCount: 910,
                    date: '2025-09-05',
                    pathway: 'Receptor Tyrosine Kinase GDNF Signaling Cascade'
                },
                {
                    gene: 'NF1',
                    ensembl: 'ENSG00000196712',
                    disease: 'Neurofibromatosis Type 1',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Multiple cafe-au-lait macules, cutaneous neurofibromas, optic pathway gliomas, plexiform tumors',
                    chr: '17q11.2',
                    severity: 'High',
                    variantCount: 3040,
                    date: '2025-07-30',
                    pathway: 'Neurofibromin Ras-GAP Signal Attenuation'
                },
                {
                    gene: 'RB1',
                    ensembl: 'ENSG00000139687',
                    disease: 'Retinoblastoma',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'High penetrance of childhood retinoblastoma presenting with leukocoria; risk of osteosarcoma',
                    chr: '13q14.2',
                    severity: 'High',
                    variantCount: 1360,
                    date: '2025-05-20',
                    pathway: 'Cell Cycle G1-to-S Phase Checkpoint Control'
                },
                {
                    gene: 'COL1A1',
                    ensembl: 'ENSG00000108821',
                    disease: 'Osteogenesis Imperfecta Types I-IV',
                    inheritance: 'Autosomal Dominant',
                    phenotype: 'Bone fragility, multiple low-energy fractures, blue sclerae, dentinogenesis imperfecta, conductive hearing loss',
                    chr: '17q21.33',
                    severity: 'High',
                    variantCount: 1890,
                    date: '2025-08-22',
                    pathway: 'Type I Procollagen Biosynthesis & Triple-Helix Folding'
                }
            ],
            generateRow: function(index) {
                const item = this.records[index];
                if (!item) return '';
                
                let severityColor = '';
                if (item.severity === 'High') severityColor = 'color: #cc0000; font-weight: bold;';
                else if (item.severity === 'Medium') severityColor = 'color: #cc6600; font-weight: 500;';
                else severityColor = 'color: #006600; font-weight: 500;';

                return `
                    <tr>
                        <td align="center"><input type="checkbox" class="row-checkbox" id="gen-${index}"></td>
                        <td><strong>${item.gene}</strong></td>
                        <td><a href="#">${item.ensembl}</a></td>
                        <td>${item.disease}</td>
                        <td>${item.inheritance}</td>
                        <td>${item.phenotype}</td>
                        <td>${item.chr}</td>
                        <td style="${severityColor}">${item.severity}</td>
                        <td>${item.variantCount}</td>
                        <td>${item.date}</td>
                        <td>${item.pathway}</td>
                    </tr>
                `;
            }
        },

        'variant-analysis': {
            headers: [
                'Select',
                'rsID',
                'Gene',
                'DNA Change',
                'Protein Change',
                'Functional Effect',
                'Population Freq',
                'Publication Count',
                'ClinVar Status',
                'ExAC Freq',
                'SIFT Score'
            ],
            records: [
                {
                    rsid: 'rs113488022',
                    gene: 'BRAF',
                    dna: 'c.1799T>A',
                    protein: 'p.Val600Glu',
                    effect: 'Missense',
                    freq: '0.00003',
                    pubs: 4210,
                    status: 'Pathogenic',
                    exac: '0.00002',
                    sift: '0.000'
                },
                {
                    rsid: 'rs121913529',
                    gene: 'KRAS',
                    dna: 'c.35G>A',
                    protein: 'p.Gly12Asp',
                    effect: 'Missense',
                    freq: '0.00002',
                    pubs: 2750,
                    status: 'Pathogenic',
                    exac: '0.00001',
                    sift: '0.000'
                },
                {
                    rsid: 'rs121913530',
                    gene: 'KRAS',
                    dna: 'c.34G>T',
                    protein: 'p.Gly12Cys',
                    effect: 'Missense',
                    freq: '0.00002',
                    pubs: 2340,
                    status: 'Pathogenic',
                    exac: '0.00001',
                    sift: '0.000'
                },
                {
                    rsid: 'rs113993960',
                    gene: 'CFTR',
                    dna: 'c.1521_1523delCTT',
                    protein: 'p.Phe508del',
                    effect: 'Inframe Deletion',
                    freq: '0.01420',
                    pubs: 3890,
                    status: 'Pathogenic',
                    exac: '0.01350',
                    sift: '0.004'
                },
                {
                    rsid: 'rs334',
                    gene: 'HBB',
                    dna: 'c.20A>T',
                    protein: 'p.Glu7Val',
                    effect: 'Missense',
                    freq: '0.03850',
                    pubs: 5600,
                    status: 'Pathogenic',
                    exac: '0.03620',
                    sift: '0.000'
                },
                {
                    rsid: 'rs28934578',
                    gene: 'TP53',
                    dna: 'c.524G>A',
                    protein: 'p.Arg175His',
                    effect: 'Missense',
                    freq: '0.00001',
                    pubs: 2480,
                    status: 'Pathogenic',
                    exac: '0.00001',
                    sift: '0.000'
                },
                {
                    rsid: 'rs11540652',
                    gene: 'TP53',
                    dna: 'c.743G>A',
                    protein: 'p.Arg248Gln',
                    effect: 'Missense',
                    freq: '0.00002',
                    pubs: 2120,
                    status: 'Pathogenic',
                    exac: '0.00001',
                    sift: '0.000'
                },
                {
                    rsid: 'rs121912651',
                    gene: 'TP53',
                    dna: 'c.637C>T',
                    protein: 'p.Arg213Ter',
                    effect: 'Nonsense',
                    freq: '0.00001',
                    pubs: 1180,
                    status: 'Pathogenic',
                    exac: '0.00000',
                    sift: '0.000'
                },
                {
                    rsid: 'rs121434569',
                    gene: 'EGFR',
                    dna: 'c.2369C>T',
                    protein: 'p.Thr790Met',
                    effect: 'Missense',
                    freq: '0.00004',
                    pubs: 3450,
                    status: 'Pathogenic',
                    exac: '0.00002',
                    sift: '0.000'
                },
                {
                    rsid: 'rs121434568',
                    gene: 'EGFR',
                    dna: 'c.2573T>G',
                    protein: 'p.Leu858Arg',
                    effect: 'Missense',
                    freq: '0.00005',
                    pubs: 3920,
                    status: 'Pathogenic',
                    exac: '0.00003',
                    sift: '0.000'
                },
                {
                    rsid: 'rs386833395',
                    gene: 'BRCA1',
                    dna: 'c.68_69delAG',
                    protein: 'p.Glu23ValfsTer17',
                    effect: 'Frameshift',
                    freq: '0.00115',
                    pubs: 1940,
                    status: 'Pathogenic',
                    exac: '0.00098',
                    sift: '0.000'
                },
                {
                    rsid: 'rs80357906',
                    gene: 'BRCA1',
                    dna: 'c.5266dupC',
                    protein: 'p.Gln1756ProfsTer74',
                    effect: 'Frameshift',
                    freq: '0.00135',
                    pubs: 1810,
                    status: 'Pathogenic',
                    exac: '0.00112',
                    sift: '0.000'
                },
                {
                    rsid: 'rs80359550',
                    gene: 'BRCA2',
                    dna: 'c.5946delT',
                    protein: 'p.Ser1982ArgfsTer22',
                    effect: 'Frameshift',
                    freq: '0.00140',
                    pubs: 1670,
                    status: 'Pathogenic',
                    exac: '0.00118',
                    sift: '0.000'
                },
                {
                    rsid: 'rs6025',
                    gene: 'F5',
                    dna: 'c.1601G>A',
                    protein: 'p.Arg534Gln',
                    effect: 'Missense',
                    freq: '0.02450',
                    pubs: 6400,
                    status: 'Pathogenic',
                    exac: '0.02380',
                    sift: '0.002'
                },
                {
                    rsid: 'rs1800562',
                    gene: 'HFE',
                    dna: 'c.845G>A',
                    protein: 'p.Cys282Tyr',
                    effect: 'Missense',
                    freq: '0.05200',
                    pubs: 4820,
                    status: 'Pathogenic',
                    exac: '0.05110',
                    sift: '0.000'
                },
                {
                    rsid: 'rs121913279',
                    gene: 'PIK3CA',
                    dna: 'c.3140A>G',
                    protein: 'p.His1047Arg',
                    effect: 'Missense',
                    freq: '0.00003',
                    pubs: 2150,
                    status: 'Pathogenic',
                    exac: '0.00001',
                    sift: '0.000'
                },
                {
                    rsid: 'rs429358',
                    gene: 'APOE',
                    dna: 'c.388T>C',
                    protein: 'p.Cys130Arg',
                    effect: 'Missense',
                    freq: '0.14700',
                    pubs: 9800,
                    status: 'Likely Pathogenic',
                    exac: '0.15100',
                    sift: '0.025'
                },
                {
                    rsid: 'rs28929474',
                    gene: 'SERPINA1',
                    dna: 'c.1096G>A',
                    protein: 'p.Glu366Lys',
                    effect: 'Missense',
                    freq: '0.01200',
                    pubs: 2190,
                    status: 'Pathogenic',
                    exac: '0.01150',
                    sift: '0.001'
                },
                {
                    rsid: 'rs10768683',
                    gene: 'HBB',
                    dna: 'c.9T>C',
                    protein: 'p.Ser3Ser',
                    effect: 'Synonymous',
                    freq: '0.34200',
                    pubs: 62,
                    status: 'Benign',
                    exac: '0.33900',
                    sift: '1.000'
                },
                {
                    rsid: 'rs1042522',
                    gene: 'TP53',
                    dna: 'c.215C>G',
                    protein: 'p.Pro72Arg',
                    effect: 'Missense',
                    freq: '0.58200',
                    pubs: 1840,
                    status: 'Benign',
                    exac: '0.57900',
                    sift: '0.850'
                }
            ],
            generateRow: function(index) {
                const item = this.records[index];
                if (!item) return '';

                let effectColor = '';
                if (item.effect === 'Nonsense' || item.effect === 'Frameshift') {
                    effectColor = 'color: #cc0000; font-weight: bold;';
                } else if (item.effect === 'Missense' || item.effect === 'Inframe Deletion') {
                    effectColor = 'color: #cc6600; font-weight: 500;';
                } else {
                    effectColor = 'color: #006600; font-weight: 500;';
                }

                let statusColor = '';
                if (item.status.includes('Pathogenic')) {
                    statusColor = 'color: #cc0000; font-weight: bold;';
                } else if (item.status === 'VUS') {
                    statusColor = 'color: #cc6600; font-weight: 500;';
                } else {
                    statusColor = 'color: #006600; font-weight: 500;';
                }

                return `
                    <tr>
                        <td align="center"><input type="checkbox" class="row-checkbox" id="var-${index}"></td>
                        <td><a href="#">${item.rsid}</a></td>
                        <td><strong>${item.gene}</strong></td>
                        <td>${item.dna}</td>
                        <td>${item.protein}</td>
                        <td style="${effectColor}">${item.effect}</td>
                        <td>${item.freq}</td>
                        <td>${item.pubs}</td>
                        <td style="${statusColor}">${item.status}</td>
                        <td>${item.exac}</td>
                        <td>${item.sift}</td>
                    </tr>
                `;
            }
        },

        'drug-interactions': {
            headers: [
                'Select',
                'Drug Name',
                'Active Compound',
                'Target Gene',
                'Interaction Type',
                'Reaction Severity',
                'FDA Status',
                'Reference (PMID)',
                'Mechanism',
                'Dosage Adjust',
                'Evidence Level'
            ],
            records: [
                {
                    name: 'Warfarin',
                    compound: 'Warfarin Sodium',
                    gene: 'VKORC1 / CYP2C9',
                    type: 'Target & Clearance Substrate',
                    severity: 'Critical',
                    fda: 'Approved (Boxed Warning)',
                    pmid: 'PMID: 28198005',
                    mechanism: 'Inhibition of VKORC1 epoxide reductase; cleared by CYP2C9; impaired clearance triggers life-threatening hemorrhages',
                    dosage: 'Reduce starting dose by 25-50% in CYP2C9 *2/*3 or VKORC1 -1639G>A variants',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Clopidogrel',
                    compound: 'Clopidogrel Bisulfate',
                    gene: 'CYP2C19',
                    type: 'Prodrug Bioactivation',
                    severity: 'Critical',
                    fda: 'Approved (Boxed Warning)',
                    pmid: 'PMID: 35034351',
                    mechanism: 'Requires CYP2C19 bioactivation; loss-of-function alleles (*2, *3) reduce active metabolite, causing stent thrombosis',
                    dosage: 'Avoid in intermediate/poor metabolizers (*2/*3); switch to prasugrel or ticagrelor',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Simvastatin',
                    compound: 'Simvastatin',
                    gene: 'SLCO1B1',
                    type: 'Hepatic Uptake Transporter',
                    severity: 'Warning',
                    fda: 'Approved',
                    pmid: 'PMID: 35152405',
                    mechanism: 'SLCO1B1 521T>C (rs4149056) reduces hepatic influx, markedly elevating systemic plasma concentration and myopathy risk',
                    dosage: 'Limit dose to 20mg daily or switch to pravastatin or rosuvastatin',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Codeine',
                    compound: 'Codeine Phosphate',
                    gene: 'CYP2D6',
                    type: 'Prodrug Activation to Morphine',
                    severity: 'Critical',
                    fda: 'Approved (Boxed Warning)',
                    pmid: 'PMID: 31002353',
                    mechanism: 'Ultrarapid metabolizers convert codeine to supratherapeutic morphine concentrations, risking fatal respiratory depression',
                    dosage: 'Avoid use in ultrarapid and poor metabolizers; select non-codeine opioid or non-opioid analgesic',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Mercaptopurine',
                    compound: '6-Mercaptopurine',
                    gene: 'TPMT / NUDT15',
                    type: 'Metabolic Inactivation',
                    severity: 'Critical',
                    fda: 'Approved',
                    pmid: 'PMID: 30447069',
                    mechanism: 'Defective TPMT or NUDT15 leads to massive accumulation of thioguanine nucleotides and fatal myelosuppression',
                    dosage: 'Reduce initial starting dose by 80-90% in homozygous/compound heterozygous deficient patients',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Fluorouracil (5-FU)',
                    compound: '5-Fluorouracil',
                    gene: 'DPYD',
                    type: 'Catabolic Clearance',
                    severity: 'Critical',
                    fda: 'Approved',
                    pmid: 'PMID: 29152729',
                    mechanism: 'Dihydropyrimidine dehydrogenase deficiency prevents catabolism, triggering fatal neutropenia and mucositis',
                    dosage: 'Reduce starting dose by 50% for intermediate metabolizers; avoid completely in poor metabolizers',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Abacavir',
                    compound: 'Abacavir Sulfate',
                    gene: 'HLA-B*57:01',
                    type: 'Immunogenetic Presentation',
                    severity: 'Critical',
                    fda: 'Approved (Boxed Warning)',
                    pmid: 'PMID: 24561393',
                    mechanism: 'Direct binding to HLA-B*57:01 antigen-binding cleft stimulates cytotoxic CD8+ T cells causing fatal hypersensitivity',
                    dosage: 'Pre-treatment screening required; strictly contraindicated if patient tests positive for HLA-B*57:01',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Omeprazole',
                    compound: 'Omeprazole Sodium',
                    gene: 'CYP2C19',
                    type: 'Clearance Substrate',
                    severity: 'Monitor',
                    fda: 'Approved',
                    pmid: 'PMID: 32918345',
                    mechanism: 'Ultrarapid and rapid metabolizers clear omeprazole excessively, causing insufficient gastric acid suppression',
                    dosage: 'Increase standard starting daily dose by 100-200% or switch to rabeprazole',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Tamoxifen',
                    compound: 'Tamoxifen Citrate',
                    gene: 'CYP2D6',
                    type: 'Bioactivation to Endoxifen',
                    severity: 'Warning',
                    fda: 'Approved',
                    pmid: 'PMID: 29385237',
                    mechanism: 'Poor CYP2D6 metabolizers fail to form active endoxifen, demonstrating higher breast cancer recurrence rates',
                    dosage: 'Consider aromatase inhibitor in postmenopausal women, or double tamoxifen dose to 40mg daily',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Carbamazepine',
                    compound: 'Carbamazepine',
                    gene: 'HLA-B*15:02 / HLA-A*31:01',
                    type: 'Immunogenetic Presentation',
                    severity: 'Critical',
                    fda: 'Approved (Boxed Warning)',
                    pmid: 'PMID: 24792697',
                    mechanism: 'Carriers of HLA-B*15:02 or HLA-A*31:01 are at high risk of Stevens-Johnson syndrome (SJS) and toxic epidermal necrolysis',
                    dosage: 'Genetic screening recommended before initiation; contraindicated if risk alleles are detected',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Allopurinol',
                    compound: 'Allopurinol',
                    gene: 'HLA-B*58:01',
                    type: 'Immunogenetic Presentation',
                    severity: 'Critical',
                    fda: 'Approved',
                    pmid: 'PMID: 25777402',
                    mechanism: 'Presentation of oxypurinol by HLA-B*58:01 triggers severe cutaneous adverse reactions (SCAR / DRESS syndrome)',
                    dosage: 'HLA-B*58:01 testing recommended; contraindicated in positive patients; initiate febuxostat instead',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Tacrolimus',
                    compound: 'Tacrolimus',
                    gene: 'CYP3A5',
                    type: 'Calcineurin Inhibitor Clearance',
                    severity: 'Warning',
                    fda: 'Approved',
                    pmid: 'PMID: 25801146',
                    mechanism: 'CYP3A5*1 extensive metabolizers have rapid clearance, requiring higher doses to avoid organ graft rejection',
                    dosage: 'Increase starting oral dose by 1.5 to 2 times standard dosing in CYP3A5*1 carriers; titrate with TDM',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Capecitabine',
                    compound: 'Capecitabine',
                    gene: 'DPYD',
                    type: 'Prodrug 5-FU Catabolism',
                    severity: 'Critical',
                    fda: 'Approved',
                    pmid: 'PMID: 29152729',
                    mechanism: 'Converted enzymatically to 5-FU; reduced DPD enzyme activity leads to lethal neutropenia, diarrhea, and stomatitis',
                    dosage: 'Reduce starting dose by 50% for DPYD intermediate metabolizers; contraindicated in poor metabolizers',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Phenytoin',
                    compound: 'Phenytoin Sodium',
                    gene: 'CYP2C9 / HLA-B*15:02',
                    type: 'Clearance Substrate & Hypersensitivity',
                    severity: 'Critical',
                    fda: 'Approved',
                    pmid: 'PMID: 25099164',
                    mechanism: 'Decreased CYP2C9 metabolism elevates plasma concentrations causing cerebellar ataxia; HLA-B*15:02 triggers SJS/TEN',
                    dosage: 'Reduce maintenance dose by 25-50% in CYP2C9 *1/*3 or *2/*3; contraindicated in HLA-B*15:02 carriers',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Atazanavir',
                    compound: 'Atazanavir Sulfate',
                    gene: 'UGT1A1',
                    type: 'Bilirubin Glucuronidation Inhibitor',
                    severity: 'Warning',
                    fda: 'Approved',
                    pmid: 'PMID: 26417955',
                    mechanism: 'Inhibits UGT1A1 enzyme; UGT1A1*28/*28 homozygous patients develop severe indirect hyperbilirubinemia and clinical jaundice',
                    dosage: 'Consider alternative antiretroviral regimen (e.g. darunavir) in UGT1A1 poor metabolizers (*28/*28)',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Azathioprine',
                    compound: 'Azathioprine',
                    gene: 'TPMT / NUDT15',
                    type: 'Thiopurine Prodrug Inactivation',
                    severity: 'Critical',
                    fda: 'Approved',
                    pmid: 'PMID: 30447069',
                    mechanism: 'Metabolized to 6-mercaptopurine; defective TPMT/NUDT15 impairs thiopurine inactivation, leading to pancytopenia',
                    dosage: 'Reduce starting dose to 10% of normal dose given 3 times weekly for homozygous deficient genotypes',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Ondansetron',
                    compound: 'Ondansetron Hydrochloride',
                    gene: 'CYP2D6',
                    type: '5-HT3 Antagonist Clearance',
                    severity: 'Warning',
                    fda: 'Approved',
                    pmid: 'PMID: 27997086',
                    mechanism: 'CYP2D6 ultrarapid metabolizers have significantly decreased plasma concentrations and reduced antiemetic efficacy',
                    dosage: 'Select alternative antiemetic not primarily metabolized by CYP2D6 (e.g. granisetron) in ultrarapid metabolizers',
                    evidence: 'Level 1A (CPIC)'
                },
                {
                    name: 'Metformin',
                    compound: 'Metformin Hydrochloride',
                    gene: 'SLC22A1 (OCT1)',
                    type: 'Hepatic Transporter Substrate',
                    severity: 'Monitor',
                    fda: 'Approved',
                    pmid: 'PMID: 21975963',
                    mechanism: 'OCT1 loss-of-function variants decrease hepatic metformin uptake, diminishing glycemic response and HbA1c lowering',
                    dosage: 'Monitor glycemic control closely; if target HbA1c is not achieved, consider secondary oral antidiabetic therapy',
                    evidence: 'Level 2A (PharmGKB)'
                }
            ],
            generateRow: function(index) {
                const item = this.records[index];
                if (!item) return '';

                let severityColor = '';
                if (item.severity === 'Critical') severityColor = 'color: #cc0000; font-weight: bold;';
                else if (item.severity === 'Warning') severityColor = 'color: #cc6600; font-weight: 500;';
                else if (item.severity === 'Monitor') severityColor = 'color: #006600; font-weight: 500;';
                else severityColor = 'color: #666666; font-weight: 500;';

                return `
                    <tr>
                        <td align="center"><input type="checkbox" class="row-checkbox" id="drug-${index}"></td>
                        <td><strong>${item.name}</strong></td>
                        <td>${item.compound}</td>
                        <td><strong>${item.gene}</strong></td>
                        <td>${item.type}</td>
                        <td style="${severityColor}">${item.severity}</td>
                        <td>${item.fda}</td>
                        <td><a href="#">${item.pmid}</a></td>
                        <td>${item.mechanism}</td>
                        <td>${item.dosage}</td>
                        <td>${item.evidence}</td>
                    </tr>
                `;
            }
        }
    }
};
