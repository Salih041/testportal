const DataGenerator = {
    categories: {
        'gene-disease': {
            headers: ['Select', 'Gene Symbol', 'Ensembl ID', 'Disease Name', 'Inheritance Pattern', 'Phenotype', 'Chromosome Location', 'Clinical Significance', 'Variant Count', 'Last Updated', 'Pathway'],
            generateRow: function(index) {
                const genes = ['BRCA1', 'TP53', 'CFTR', 'HBB', 'APOE', 'EGFR', 'MYC', 'HTT', 'PTEN', 'APC'];
                const diseases = ['Breast Cancer', 'Li-Fraumeni Syndrome', 'Cystic Fibrosis', 'Sickle Cell Anemia', 'Alzheimer\'s', 'Lung Cancer', 'Lymphoma', 'Huntington\'s', 'Cowden Syndrome', 'Polyposis'];
                const inheritances = ['Autosomal Dominant', 'Autosomal Recessive', 'X-Linked Dominant', 'X-Linked Recessive', 'Mitochondrial', 'Multifactorial'];
                const phenotypes = ['Tumor development', 'Respiratory failure', 'Cognitive decline', 'Anemia', 'Motor impairment', 'Cardiomyopathy', 'Immune deficiency'];
                const severities = ['High', 'Medium', 'Low'];
                const pathways = ['DNA Repair', 'Cell Cycle', 'Metabolism', 'Signal Transduction', 'Apoptosis'];
                
                const gene = genes[Math.floor(Math.random() * genes.length)];
                const disease = diseases[Math.floor(Math.random() * diseases.length)];
                const inheritance = inheritances[Math.floor(Math.random() * inheritances.length)];
                const phenotype = phenotypes[Math.floor(Math.random() * phenotypes.length)];
                const severity = severities[Math.floor(Math.random() * severities.length)];
                const pathway = pathways[Math.floor(Math.random() * pathways.length)];
                
                const ensembl = 'ENSG00000' + Math.floor(100000 + Math.random() * 899999);
                const chrNum = Math.floor(1 + Math.random() * 22);
                const chrArm = Math.random() > 0.5 ? 'p' : 'q';
                const chrPos = Math.floor(11 + Math.random() * 80);
                const chr = `chr${chrNum}${chrArm}${chrPos}`;
                const variantCount = Math.floor(10 + Math.random() * 500);
                const date = `202${Math.floor(3 + Math.random() * 4)}-0${Math.floor(1 + Math.random() * 9)}-${Math.floor(10 + Math.random() * 18)}`;
                
                let severityColor = '';
                if(severity === 'High') severityColor = 'color: #cc0000; font-weight: bold;';
                else if(severity === 'Medium') severityColor = 'color: #cc6600;';
                else severityColor = 'color: #006600;';
                
                return `
                    <tr>
                        <td align="center"><input type="checkbox" class="row-checkbox" id="gen-${index}"></td>
                        <td><strong>${gene}</strong></td>
                        <td><a href="#">${ensembl}</a></td>
                        <td>${disease}</td>
                        <td>${inheritance}</td>
                        <td>${phenotype}</td>
                        <td>${chr}</td>
                        <td style="${severityColor}">${severity}</td>
                        <td>${variantCount}</td>
                        <td>${date}</td>
                        <td>${pathway}</td>
                    </tr>
                `;
            }
        },
        'variant-analysis': {
            headers: ['Select', 'rsID', 'Gene', 'DNA Change', 'Protein Change', 'Functional Effect', 'Population Freq', 'Publication Count', 'ClinVar Status', 'ExAC Freq', 'SIFT Score'],
            generateRow: function(index) {
                const genes = ['BRCA1', 'TP53', 'CFTR', 'HBB', 'APOE', 'BRAF', 'KRAS', 'PIK3CA'];
                const effects = ['Missense', 'Nonsense', 'Frameshift', 'Splice Site', 'Synonymous', 'Inframe Deletion'];
                const clinvar = ['Pathogenic', 'Likely Pathogenic', 'VUS', 'Likely Benign', 'Benign'];
                
                const gene = genes[Math.floor(Math.random() * genes.length)];
                const effect = effects[Math.floor(Math.random() * effects.length)];
                const status = clinvar[Math.floor(Math.random() * clinvar.length)];
                
                const rsid = 'rs' + Math.floor(1000000 + Math.random() * 8999999);
                const nucs = ['A', 'C', 'G', 'T'];
                const n1 = nucs[Math.floor(Math.random() * 4)];
                let n2 = nucs[Math.floor(Math.random() * 4)];
                while(n1 === n2) n2 = nucs[Math.floor(Math.random() * 4)];
                const dna = `c.${Math.floor(100 + Math.random() * 2900)}${n1}&gt;${n2}`;
                
                const aas = ['Arg', 'Leu', 'Ser', 'Val', 'Gly', 'Ala', 'Met', 'Pro', 'Thr', 'Tyr'];
                const aa1 = aas[Math.floor(Math.random() * aas.length)];
                let aa2 = aas[Math.floor(Math.random() * aas.length)];
                if(effect === 'Nonsense') aa2 = 'Ter';
                const protein = `p.${aa1}${Math.floor(10 + Math.random() * 500)}${aa2}`;
                
                const freq = (Math.random() * 0.05).toFixed(5);
                const exac = (Math.random() * 0.04).toFixed(5);
                const pubs = Math.floor(Math.random() * 250);
                const sift = (Math.random()).toFixed(3);
                
                let effectColor = '';
                if(effect === 'Nonsense' || effect === 'Frameshift') effectColor = 'color: #cc0000; font-weight: bold;';
                else if(effect === 'Missense' || effect === 'Splice Site' || effect === 'Inframe Deletion') effectColor = 'color: #cc6600;';
                else effectColor = 'color: #006600;';

                let statusColor = '';
                if(status.includes('Pathogenic')) statusColor = 'color: #cc0000; font-weight: bold;';
                else if(status === 'VUS') statusColor = 'color: #cc6600;';
                else statusColor = 'color: #006600;';

                return `
                    <tr>
                        <td align="center"><input type="checkbox" class="row-checkbox" id="var-${index}"></td>
                        <td><a href="#">${rsid}</a></td>
                        <td><strong>${gene}</strong></td>
                        <td>${dna}</td>
                        <td>${protein}</td>
                        <td style="${effectColor}">${effect}</td>
                        <td>${freq}</td>
                        <td>${pubs}</td>
                        <td style="${statusColor}">${status}</td>
                        <td>${exac}</td>
                        <td>${sift}</td>
                    </tr>
                `;
            }
        },
        'drug-interactions': {
            headers: ['Select', 'Drug Name', 'Active Compound', 'Target Gene', 'Interaction Type', 'Reaction Severity', 'FDA Status', 'Reference (PMID)', 'Mechanism', 'Dosage Adjust', 'Evidence Level'],
            generateRow: function(index) {
                const drugs = [
                    { name: 'Aspirin', compound: 'Acetylsalicylic Acid' },
                    { name: 'Metformin', compound: 'Metformin Hydrochloride' },
                    { name: 'Omeprazole', compound: 'Omeprazole Sodium' },
                    { name: 'Lisinopril', compound: 'Lisinopril Dihydrate' },
                    { name: 'Simvastatin', compound: 'Simvastatin' },
                    { name: 'Sertraline', compound: 'Sertraline HCl' },
                    { name: 'Amoxicillin', compound: 'Amoxicillin Trihydrate' },
                    { name: 'Warfarin', compound: 'Warfarin Sodium' },
                    { name: 'Clopidogrel', compound: 'Clopidogrel Bisulfate' }
                ];
                const genes = ['CYP2C19', 'CYP2D6', 'VKORC1', 'SLCO1B1', 'TPMT', 'DPYD', 'CYP3A4', 'CYP1A2'];
                const types = ['Inhibitor', 'Inducer', 'Substrate', 'Agonist', 'Antagonist', 'Modulator'];
                const severities = ['Critical', 'Warning', 'Monitor', 'Unknown'];
                const mechanisms = ['Enzyme Inhibition', 'Receptor Binding', 'Transport Alteration', 'Metabolic Inducement'];
                const dosages = ['No change', 'Reduce 50%', 'Increase 25%', 'Avoid use', 'Monitor closely'];
                const evidences = ['High (1A)', 'Moderate (2A)', 'Low (3)', 'Preclinical'];
                
                const drugObj = drugs[Math.floor(Math.random() * drugs.length)];
                const gene = genes[Math.floor(Math.random() * genes.length)];
                const type = types[Math.floor(Math.random() * types.length)];
                const severity = severities[Math.floor(Math.random() * severities.length)];
                const mechanism = mechanisms[Math.floor(Math.random() * mechanisms.length)];
                const dosage = dosages[Math.floor(Math.random() * dosages.length)];
                const evidence = evidences[Math.floor(Math.random() * evidences.length)];
                
                const isApproved = Math.random() > 0.15;
                const fdaStatus = isApproved ? 'Approved' : 'Investigational';
                const pmid = 'PMID: ' + Math.floor(10000000 + Math.random() * 25000000);
                
                let severityColor = '';
                if(severity === 'Critical') severityColor = 'color: #cc0000; font-weight: bold;';
                else if(severity === 'Warning') severityColor = 'color: #cc6600;';
                else if(severity === 'Monitor') severityColor = 'color: #006600;';
                else severityColor = 'color: #666666;';
                
                return `
                    <tr>
                        <td align="center"><input type="checkbox" class="row-checkbox" id="drug-${index}"></td>
                        <td><strong>${drugObj.name}</strong></td>
                        <td>${drugObj.compound}</td>
                        <td><strong>${gene}</strong></td>
                        <td>${type}</td>
                        <td style="${severityColor}">${severity}</td>
                        <td>${fdaStatus}</td>
                        <td><a href="#">${pmid}</a></td>
                        <td>${mechanism}</td>
                        <td>${dosage}</td>
                        <td>${evidence}</td>
                    </tr>
                `;
            }
        }
    }
};
