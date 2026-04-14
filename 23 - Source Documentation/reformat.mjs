import { readFileSync, writeFileSync } from 'fs';

const filePath = process.argv[2];
if (!filePath) { console.error('Usage: node reformat.mjs <filepath>'); process.exit(1); }

let content = readFileSync(filePath, 'utf8');

// 1. Replace all bullet char with -
content = content.replace(/\uf0b7/g, '-');
content = content.replace(/�/g, '-');

// 2. Fix NOTE/WARNING/TIP/ATTENTION callouts that start a line
// Handle single-line patterns: NOTE text...
content = content.replace(/^(NOTE)\s+(?!More Information)/gm, (match, type) => {
  return `> [!NOTE]\n> `;
});
content = content.replace(/^(NOTE More Information:)/gm, '> [!NOTE]\n> More Information:');
content = content.replace(/^(WARNING)\s*(!?)\s*/gm, '> [!WARNING]\n> ');
content = content.replace(/^(TIP)\s+/gm, '> [!TIP]\n> ');
content = content.replace(/^(ATTENTION)\s+/gm, '> [!ATTENTION]\n> ');

// 3. Fix major section headings - convert known major sections to ##
const majorSections = [
  'New! Getting Started with Jaspersoft 9.0',
  'Getting Started with Advanced Reporting',
  'Advanced Reporting Components',
  'Clarity Data Warehouse',
  'Ad Hoc Views and Reports',
  'Create an Ad Hoc View and Report',
  'Run or Schedule an Advanced Report',
  'Task Data in the Data Warehouse',
  'Roadmap Data in the Data Warehouse',
  'Resource Team Data in the Data Warehouse',
  'Advanced Reporting Domains',
  'Domain Terminology',
  'Common Characteristics of Advanced Reporting Domains',
  'Investment Management Domain',
  'Application Management Domain',
  'Idea Management Domain',
  'Project Management Domain',
  'Resource Management Domain',
  'Time Management Domain',
  'Financial Management Domain',
  'Custom Master Objects Domain',
  'Data Warehouse Database Schema',
  'Recommended Jaspersoft Training',
  'Ad Hoc Views and Custom Report Development',
  'Best Practices for Ad Hoc Views',
  'Best Practices for Custom Report Development',
  'Create and Publish Jaspersoft Studio Reports',
  'Create an Advanced Reporting Developer User',
  'Set Up the JasperReports Server Connection',
  'Create a Simple Report',
  'Create a Report Unit',
  'Publish a Report',
  'Add Resources to the Report',
  'Create a Parent Report with Child Subreports',
  'Tips for Creating and Publishing Reports',
  'Jaspersoft Report Page Limits',
  'Install Jaspersoft Studio Professional and CA JDBC Adapter',
  'Download and Install Jaspersoft Studio Professional',
  'Download and Install CA JDBC Adapter for Jaspersoft Studio Professional',
  'Create a CA JDBC Adapter Connection in Jaspersoft Studio Professional',
  'Preview Data with the Data Adapter',
  'Troubleshoot Errors with the Jaspersoft Studio CA JDBC Adapter',
  'Export, Import, or Migrate Advanced Reporting Content',
  'Prerequisites',
  'Export Content',
  'Import Content',
  'View Database Schema Differences',
  'Update Domain Schema',
  'Update Domain Schema in Jaspersoft 9.0',
  'Jaspersoft Commands for Classic PPM Administrators \\(On-Premise Only\\)',
  'First-Time Installation and Upgrades',
  'Upgrades',
  'Jaspersoft Sender Email Address',
  'Maintenance',
  'Synchronize and Jaspersoft Environments',
  'Repair Domain Corruption',
  'Advanced Reporting Notifications',
  'PMO Accelerator Advanced Reporting Content',
  'PMO Accelerator Attributes and Data Warehouse',
  'PMO Accelerator Advanced Reporting Setup',
  'PMO Accelerator Advanced Reporting Data Warehouse Calendar Periods and FTE Calculations',
  'PMO Accelerator Advanced Reporting and Data WareHouse Jobs',
  'PMO Accelerator Advanced Reporting Time Slices',
  'PMO Accelerator Advanced Reporting Populate Option',
  'PMO Accelerator Advanced Reporting Language, Locale, and Time Zone',
  'PMO Accelerator Advanced Reporting Source Files',
  'PMO Accelerator Advanced Reporting Data Sources',
  'Advanced Reporting Roles and Permissions',
  'Project Management Reports',
  'Investment Management Reports',
  'Roadmap Timeline Report',
];

// Convert standalone heading lines to proper markdown headings
for (const section of majorSections) {
  const escaped = section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Match line that is exactly this heading text (possibly preceded by whitespace)
  const regex = new RegExp(`^${escaped}$`, 'gm');
  content = content.replace(regex, `## ${section}`);
}

// 4. Convert known subsection headings to ###
const subSections = [
  'Report Prerequisites',
  'Report Properties',
  'Report Parameter Options',
  'Parameter Lookup Values',
  'Parameter Explanations',
  'Report Fields and Calculations',
  'Report Security',
  'Report Security and Technical Details',
  'Dashboard Filter Explanations',
  'Download the Main and Subreports JRXML',
  'Create Report Unit for Main Report',
  'Add Subreports to Main Report Unit',
  'Add Resources to a Report',
  'Show the View SQL Query Button',
  'Migrate Custom Domains',
  'Start the Report',
  'Design the Report',
  'Develop the Report',
  'Publish the Report',
  'Run the Report',
  'Export',
  'Import',
  'List Domains',
  'Add Domains',
  'Remove Domains',
  'Configure Jaspersoft Studio to Support Bundled JDK TrustStore \\(Jaspersoft Studio 7.9 TCPS Only\\)',
];

for (const section of subSections) {
  const escaped = section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^${escaped}$`, 'gm');
  content = content.replace(regex, `### ${section}`);
}

// 5. Convert report names to ### headings
const reportNames = [
  'KPIs by Project Type \\(Dashboard\\)',
  'KPIs by Project Type',
  'Top 50 Project Watchlist',
  'Project Portfolio Summary',
  'Project Planning Schedule',
  'Project Schedule',
  'Project Cost and Effort',
  'Project Task Dependencies',
  'Key Task and Milestone Status',
  'Project Earned Value',
  'Project Storyboard',
  'Project Status Report List',
  'Project Status Summary',
  'Project Status Detail',
  'Project Risk, Issue, and Change Summary',
  'Project Risk Register',
  'Project Issue Register',
  'Project Change Request Register',
  'Project or Program Roadmap',
  'Investment Allocations and Assignments',
  'Investment Assignments by Task',
  'Investment Baseline vs. Plan by Task',
  'Investment Time and Estimate Review',
  'Product or Application Roadmap',
  'Investment Risk, Issue, and Change Summary',
  'Investment Risk Register',
  'Investment Issue Register',
  'Investment Change Request Register',
  'Investment Status Report List',
];

for (const name of reportNames) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^${escaped}$`, 'gm');
  content = content.replace(regex, `### ${name}`);
}

// 6. Wrap code-like content in backticks
// Wrap admin commands
content = content.replace(/^(admin\s+(?:content-jaspersoft|jaspersoft|update)\s+.*)$/gm, '```\n$1\n```');
// Wrap file paths inline
content = content.replace(/(<[^>]+>\/[^<\s]+)/g, '`$1`');

// 7. Fix "Figure N:" image references
content = content.replace(/Figure (\d+): (.*)/g, '*Figure $1: $2*');

// 8. Clean up multiple consecutive blank lines (more than 2)
content = content.replace(/\n{4,}/g, '\n\n\n');

// 9. Fix "- Jaspersoft Community Articles, Tutorials, and Videos" (already using -)
// No action needed since we already replaced the bullet char

// 10. Bold field names and UI elements in common patterns
// Bold "Follow these steps:"
content = content.replace(/^Follow these steps:$/gm, '**Follow these steps:**');

// Write the result
writeFileSync(filePath, content, 'utf8');
console.log(`Reformatted: ${filePath}`);
