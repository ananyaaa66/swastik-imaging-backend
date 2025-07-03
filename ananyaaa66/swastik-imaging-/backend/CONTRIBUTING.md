# Contributing to Swastik Imaging Backend

Thank you for your interest in contributing to the Swastik Imaging & Diagnostics backend API!

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/swastik-imaging-backend.git
   cd swastik-imaging-backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Set up database:**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

6. **Start development server:**
   ```bash
   npm run dev
   ```

## 🛠️ Development Workflow

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
3. **Test your changes:**
   ```bash
   npm test
   node test-api.js
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**

## 📝 Coding Standards

- **Code Style**: Follow existing patterns
- **Commits**: Use conventional commit messages
- **Testing**: Add tests for new features
- **Documentation**: Update docs for API changes
- **Security**: Follow security best practices

## 🧪 Testing

```bash
# Run all tests
npm test

# Test API endpoints
node test-api.js

# Check code quality
npm run lint
```

## 📚 Documentation

- Update API documentation for new endpoints
- Include examples in your PR description
- Update README.md if needed

## 🔒 Security

- Never commit sensitive data (.env files)
- Follow OWASP security guidelines
- Report security issues privately

## 🐛 Bug Reports

Please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Error logs if available

## 💡 Feature Requests

- Check existing issues first
- Provide clear use case
- Include implementation ideas
- Consider backward compatibility

## 📞 Questions?

- Open an issue for general questions
- Check existing documentation
- Contact maintainers for urgent issues

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🙏