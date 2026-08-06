
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
	PYTHONUNBUFFERED=1 \
	PIP_NO_CACHE_DIR=1 \
	PIP_DISABLE_PIP_VERSION_CHECK=1 \
	PORT=8000

WORKDIR /app

# Install system dependencies commonly needed for Python packages.
RUN apt-get update \
	&& apt-get install -y --no-install-recommends build-essential gcc curl \
	&& rm -rf /var/lib/apt/lists/*

# Copy requirements (if present) and install. If requirements.txt is empty/missing, this is a no-op.
COPY requirements.txt /app/requirements.txt
RUN if [ -s /app/requirements.txt ]; then pip install --no-cache-dir -r /app/requirements.txt; fi

# Copy application source
COPY . /app

# Create non-root user for security
RUN groupadd -r appuser && useradd -r -g appuser appuser || true
USER appuser

EXPOSE 8000

# Default command — adjust module path if your ASGI app lives elsewhere (e.g. app.main:app)
CMD ["python", "-m", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]