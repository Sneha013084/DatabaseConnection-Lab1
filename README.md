## Reflection

1.Why is it important to whitelist IP addresses in a real-world production environment?

Whitelisting IPs means only allowing trusted sources (like your app servers, VPN, or office network) to connect to sensitive resources such as databases, APIs, or admin dashboards. It will provide security, data protection and regulatory compliance.

Risks of allowing 0.0.0.0/0: Open to attack, accidental exposure of sensitive information and resource abuse.

2.What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?

e dotenv package is used in Node.js to load environment variables from a .env file into process.env. Keeps secrets out of source code (API keys, DB passwords). Also make Easier config management  and avoids hardcoding values

Other methods :1.Cloud provider secrets managers

                AWS Systems Manager Parameter Store / Secrets Manager

                Google Secret Manager

                Azure Key Vault

           2.Container orchestration tools

                Kubernetes Secrets / ConfigMaps

                Docker secrets

 3.Environment variable injection from CI/CD pipelines (e.g., GitHub Actions, GitLab, Jenkins).3. If your application failed to connect, what are the first few steps you would take to debug the issue?

    Check logs / error messages, Verify environment variables,Verify credentials.
